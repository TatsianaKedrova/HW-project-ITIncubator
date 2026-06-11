import React, { useState, ChangeEvent } from "react";
import AvatarEditor, { useAvatarEditor } from "react-avatar-editor";

export const AvatarEditorModal = () => {
  // Store the File object or null if nothing is uploaded yet
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1.2);

  // Use the library's hook to control the editor instance
  const editorRef = useAvatarEditor();

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
      // You can now send this finalImageUrl to your database/server!
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* File Selector */}
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {selectedImage && (
        <div style={{ marginTop: "20px" }}>
          {/* The Editor Canvas Component */}
          <AvatarEditor
            ref={editorRef.ref}
            image={selectedImage}
            width={250}
            height={250}
            border={50}
            borderRadius={125} // Half of width makes it a perfect circle!
            color={[255, 255, 255, 0.6]} // Clear window overlay color
            scale={zoomLevel}
            rotate={0}
          />

          {/* Zoom Slider Control */}
          <div style={{ margin: "15px 0" }}>
            <label>Zoom: </label>
            <input
              type="range"
              min="1"
              max="3"
              step="0.01"
              value={zoomLevel}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setZoomLevel(parseFloat(e.target.value))
              }
            />
          </div>

          {/* Save Button */}
          <button onClick={handleSave}>Save Profile Picture</button>
        </div>
      )}
    </div>
  );
};
