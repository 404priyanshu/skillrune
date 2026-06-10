"use client";

import { useState, useMemo } from "react";
import { Folder, FolderOpen, FileText, ChevronRight, ChevronDown, Book, ShieldAlert } from "lucide-react";

type FileItem = {
  path: string;
  description: string;
};

type TreeNode = {
  name: string;
  files: FileItem[];
  folders: Record<string, TreeNode>;
};

export function FileTree({ files }: { files: FileItem[] }) {
  // Parse flat file paths into a nested tree structure
  const tree = useMemo(() => {
    const root: TreeNode = { name: "root", files: [], folders: {} };
    
    files.forEach((file) => {
      const parts = file.path.split("/");
      let current = root;
      
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        const isFile = i === parts.length - 1;
        
        if (isFile) {
          current.files.push(file);
        } else {
          if (!current.folders[part]) {
            current.folders[part] = { name: part, files: [], folders: {} };
          }
          current = current.folders[part];
        }
      }
    });
    
    return root;
  }, [files]);

  return (
    <div className="rounded-lg border border-[var(--border-soft)] bg-[var(--parchment)] p-4 font-mono text-sm shadow-inner max-w-full overflow-x-auto">
      <TreeFolder node={tree} isRoot={true} />
    </div>
  );
}

function TreeFolder({ node, isRoot = false }: { node: TreeNode; isRoot?: boolean }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen((prev) => !prev);

  // Get file name from path
  const getFileName = (path: string) => {
    const parts = path.split("/");
    return parts[parts.length - 1];
  };

  // Select suitable icon for files
  const getFileIcon = (fileName: string) => {
    const lower = fileName.toLowerCase();
    if (lower === "skill.md") return <Book className="h-4 w-4 text-[var(--brand)] shrink-0" />;
    return <FileText className="h-4 w-4 text-[var(--stone)] shrink-0" />;
  };

  if (isRoot) {
    return (
      <div className="space-y-1.5">
        {/* Render folders in root */}
        {Object.values(node.folders).map((subFolder) => (
          <TreeFolder key={subFolder.name} node={subFolder} />
        ))}
        {/* Render files in root */}
        {node.files.map((file) => (
          <div
            key={file.path}
            className="group flex items-start gap-2.5 py-1 px-2 rounded hover:bg-[var(--ivory)] transition-all"
          >
            {getFileIcon(getFileName(file.path))}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 min-w-0">
              <span className="text-[var(--brand)] font-bold truncate">{getFileName(file.path)}</span>
              <span className="font-ui text-xs text-[var(--stone)] truncate group-hover:text-[var(--olive)] transition-colors">
                {file.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-1 pl-2">
      {/* Folder Row */}
      <button
        onClick={toggle}
        className="flex items-center gap-1.5 py-1 px-1.5 rounded hover:bg-[var(--border-soft)]/40 text-[var(--near-black)] transition-all cursor-pointer w-full text-left"
      >
        {isOpen ? (
          <>
            <ChevronDown className="h-3.5 w-3.5 text-[var(--stone)] shrink-0" />
            <FolderOpen className="h-4 w-4 text-[var(--brand-light)] shrink-0" />
          </>
        ) : (
          <>
            <ChevronRight className="h-3.5 w-3.5 text-[var(--stone)] shrink-0" />
            <Folder className="h-4 w-4 text-[var(--brand-light)] shrink-0" />
          </>
        )}
        <span className="font-bold">{node.name}/</span>
      </button>

      {/* Expanded Contents */}
      {isOpen && (
        <div className="pl-5 border-l border-[var(--border-soft)] ml-3.5 py-1 space-y-1">
          {/* Render subfolders */}
          {Object.values(node.folders).map((subFolder) => (
            <TreeFolder key={subFolder.name} node={subFolder} />
          ))}
          {/* Render files */}
          {node.files.map((file) => (
            <div
              key={file.path}
              className="group flex items-start gap-2.5 py-1 px-2 rounded hover:bg-[var(--border-soft)]/20 transition-all"
            >
              {getFileIcon(getFileName(file.path))}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 min-w-0">
                <span className="text-[var(--brand-light)] font-medium truncate">{getFileName(file.path)}</span>
                <span className="font-ui text-xs text-[var(--stone)] truncate group-hover:text-[var(--olive)] transition-colors">
                  {file.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
