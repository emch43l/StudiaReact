import { createPortal } from "react-dom";
import { useRef } from "react";

export default function ModalBody({
  open,
  toggle,
  children,
}: {
  open: boolean;
  toggle: Function;
  children: React.ReactNode;
}) {
  const closeArea = useRef(null);
  const closeModal = (e: React.MouseEvent) => {
    if (e.target === closeArea?.current) {
      toggle(false);
    }
  };

  return createPortal(
    open ? (
      <div
        onClick={(e) => closeModal(e)}
        ref={closeArea}
        className="z-10 fixed inset-0 flex justify-center items-center sm:pt-8 bg-black/30"
      >
        <div className="bg-slate-50 p-3 rounded-xl relative w-[95%] max-h-[95%] sm:w-fit  overflow-hidden">
          <div className="absolute right-3 top-3 text-lg">
            <button className="btn btn-sm" onClick={() => toggle(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          {children}
        </div>
      </div>
    ) : null,
    document.getElementById("modal-root") as HTMLElement
  );
}
