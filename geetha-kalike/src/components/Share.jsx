import React from "react";

function Share() {
  return (
    <div>
      <div id="share-buttons">
        <a
          href="whatsapp://send?text=http://geetakalike-app.com.s3-website.ap-south-1.amazonaws.com/"
          data-action="share/whatsapp/share"
          target="http://geetakalike-app.com.s3-website.ap-south-1.amazonaws.com/"
        >
          <img
            src="https://pcdn.sharethis.com/wp-content/themes/sharethis-custom/assets/images/whatsappimg copy.png"
            alt="Whatsapp"
          />
        </a>
        <a
          href="https://www.facebook.com/sharer.php?u=http://geetakalike-app.com.s3-website.ap-south-1.amazonaws.com/"
          target="_blank"
        >
          <img
            src="https://4.bp.blogspot.com/-raFYZvIFUV0/UwNI2ek6i3I/AAAAAAAAGSA/zs-kwq0q58E/s1600/facebook.png"
            alt="Facebook"
          />
        </a>{" "}
        <a
          href="https://twitter.com/share?url=http://geetakalike-app.com.s3-website.ap-south-1.amazonaws.com/&text=Geetha kalike"
          target="_blank"
        >
          <img
            src="https://4.bp.blogspot.com/--ISQEurz3aE/UwNI4hDaQMI/AAAAAAAAGS4/ZAgmPiM9Xpk/s1600/twitter.png"
            alt="Twitter"
          />
        </a>{" "}
        
        <a
          href="https://www.linkedin.com/shareArticle?mini=true&url=http://geetakalike-app.com.s3-website.ap-south-1.amazonaws.com/"
          target="_blank"
        >
          <img
            src="https://2.bp.blogspot.com/-3_cATk7Wlho/UwNI3eoTTLI/AAAAAAAAGSQ/Y8cpq6S-SeQ/s1600/linkedin.png"
            alt="LinkedIn"
          />
        </a>{" "}
        <a href="mailto:?Subject= Geetha kalike &Body=I%20saw%20this%20and%20thought%20of%20you!%20 http://geetakalike-app.com.s3-website.ap-south-1.amazonaws.com/">
          <img
            src="https://4.bp.blogspot.com/-njgKtNLrPqI/UwNI2o-9WfI/AAAAAAAAGR4/f8da1gBgyLs/s1600/email.png"
            alt="Email"
          />
        </a>{" "}
      </div>
    </div>
  );
}

export default Share;
