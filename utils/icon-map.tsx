import React from "react";
import {
  ArrowDown,
  Check,
  ChevronRight,
  FileCode,
  FileText,
  Folder,
  GitBranch,
  Package,
  Plus,
  Zap,
} from "lucide-react";
import { SiBun, SiGithub } from "react-icons/si";

const IconMap: Record<string, React.ReactNode> = {
  ArrowDown: <ArrowDown />,
  Check: <Check />,
  ChevronRight: <ChevronRight />,
  FileCode: <FileCode />,
  FileText: <FileText />,
  Folder: <Folder />,
  GitBranch: <GitBranch />,
  Package: <Package />,
  Plus: <Plus />,
  Zap: <Zap />,
  bun: <SiBun />,
  GitHub: <SiGithub />,
};

export function getIcon(name: string, className?: string): React.ReactNode {
  const icon = IconMap[name];

  if (!icon) {
    return null;
  }

  if (React.isValidElement(icon) && className) {
    return <icon.type className={className} />;
  }

  return icon;
}
