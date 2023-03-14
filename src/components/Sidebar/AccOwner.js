import { ownerImageProps } from "@/util/nextjsImageProperties/imageProperties";
import Image from "next/image";

function AccOwner() {
  return (
    <div id="acc-owner">
      <Image {...ownerImageProps} />
      <div id="owner-cred">
        <h3>MD. Shahin</h3>
        <p>admin@admin.com</p>
      </div>
    </div>
  );
}

export default AccOwner;
