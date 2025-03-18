interface SidebarProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  position?: "left" | "right";
  type?: string;
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  setOpen,
  position = "left",
  children,
}) => {
  return (
    <div
      className={`fixed top-0 ${position === "left" ? "left-0" : "right-0"} 
        w-64 h-full bg-white shadow-lg transition-transform ease-in-out z-50 
        ${
          isOpen
            ? "translate-x-0"
            : position === "left"
            ? "-translate-x-full"
            : "translate-x-full"
        }`}>
      <button
        className="absolute top-4 right-4 text-xl"
        onClick={() => setOpen(false)}>
        ✖
      </button>
      <div className="p-5">{children}</div>
    </div>
  );
};

export default Sidebar;
