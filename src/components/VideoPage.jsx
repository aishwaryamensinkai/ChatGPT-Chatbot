import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import ss from "../s.json";
const VideoPage = () => {
  const { id } = useParams();

  // Placeholder function to get URL parameters
  const getUrlParams = () => {
    return new URLSearchParams(window.location.search);
  };

  // Placeholder function to generate random IDs
  const randomID = (length) => {
    return Math.random()
      .toString(36)
      .substring(2, 2 + length);
  };

  const roomID = getUrlParams().get("roomID") || randomID(5);

  let myMeeting = (element) => {
    // generate Kit Token
    const appID = ss.appID;
    const serverSecret = ss.serverSecret;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      randomID(5),
      randomID(5)
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>
        Video Call link created by{" "}
        <i>
          <b>{id}</b>
        </i>
      </h3>
      <div ref={myMeeting}></div>
    </div>
  );
};

export default VideoPage;
