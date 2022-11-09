import React from "react";
import { Button } from "@mui/material";

export function CloudinaryUploadWidget({ handleSetUrl, buttonText = "Upload a profile Picture"}) {
  const cloudName = "dhat5iy1e";
  const uploadPreset = "develhope";

  var myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: cloudName,
      uploadPreset: uploadPreset,
      // cropping: true, //add a cropping step
      // showAdvancedOptions: true,  //add advanced options (public_id and tag)
      // sources: [ "local", "url"], // restrict the upload sources to URL and local files
      // multiple: false,  //restrict upload to a single file
      // folder: "user_images", //upload files to the specified folder
      // tags: ["users", "profile"], //add the given tags to the uploaded files
      // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
      // clientAllowedFormats: ["images"], //restrict uploading to image files only
      // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
      // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
      // theme: "purple", //change to a purple theme
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        handleSetUrl(result.info.url);
      }
    }
  );

  function openWidget() {
    myWidget.open();
  }

  return (
    <Button
      id="upload_widget"
      className="cloudinary-button"
      variant="outlined"
      onClick={openWidget}
    >
      {buttonText}
    </Button>
  );
}
