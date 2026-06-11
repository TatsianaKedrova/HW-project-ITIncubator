import React, { useState, ChangeEvent } from "react";
import AvatarEditor, { useAvatarEditor } from "react-avatar-editor";
interface AvatarEditorModalProps {
  isOpen: boolean;
  imageFile: File | null;
  onClose: () => void;
  onSave: (croppedImageUrl: string) => void;
}

export const AvatarEditorModal = ({
  isOpen,
  imageFile,
  onClose,
  onSave,
}: AvatarEditorModalProps) => {
  // Store the File object or null if nothing is uploaded yet
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [zoom, setZoom] = useState<number>(1.2);

  // Use the library's hook to control the editor instance
  const editorRef = useAvatarEditor();
  if (!isOpen || !imageFile) return null;

  // 1. Grab file from input when chosen
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // 2. Save the final cropped image
  const handleSave = (): void => {
    // Safely get the canvas using the hook's reference
    const canvas = editorRef.getImageScaledToCanvas();
    if (canvas) {
      // Turn the canvas image into a data URL string
      const finalImageUrl: string = canvas.toDataURL();
      console.log("Ready to upload cropped image:", finalImageUrl);
      onSave(finalImageUrl);
      onClose(); // Pass the cropped image URL back to parent
    }
  };

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <h3>Edit Profile Picture</h3>

        {/* The Editor Canvas */}
        <div style={{ marginBottom: "15px" }}>
          <AvatarEditor
            ref={editorRef.ref}
            image={imageFile}
            width={200}
            height={200}
            border={40}
            borderRadius={100} // Half of width makes it a circle
            color={[0, 0, 0, 0.5]} // Dark dimmed overlay background
            scale={zoom}
            rotate={0}
          />
        </div>

        {/* Zoom Slider Control */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="zoom-slider" style={{ marginRight: "10px" }}>
            Zoom:
          </label>
          <input
            id="zoom-slider"
            type="range"
            min="1"
            max="3"
            step="0.01"
            value={zoom}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setZoom(parseFloat(e.target.value))
            }
          />
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button onClick={onClose} style={cancelButtonStyle}>
            Cancel
          </button>
          <button onClick={handleSave} style={saveButtonStyle}>
            Save Picture
          </button>
        </div>
      </div>
    </div>
  );
};

// 🎨 Basic Inline Styles for Quick Testing
const modalOverlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  padding: "25px",
  borderRadius: "8px",
  textAlign: "center",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
};

const cancelButtonStyle: React.CSSProperties = {
  padding: "8px 16px",
  backgroundColor: "#ccc",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const saveButtonStyle: React.CSSProperties = {
  padding: "8px 16px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};
