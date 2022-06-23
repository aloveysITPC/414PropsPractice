import React from "react";
import Emoji from "./Emoji";

function Entry() {
  return (
    <div className="term">
      <dt>
        <Emoji />
      </dt>
      <dd>
        “You can do that!” or “I feel strong!” Arm with tense biceps. Also used
        in connection with doing sports, e.g. at the gym.
      </dd>
    </div>
  );
}

//
export default Entry;
