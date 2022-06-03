import { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function Bar(props) {
  return (
    <div>
      <div className="col-md-6">
        <span className="text-white">Study</span>
        <ProgressBar variant="warning" now={props.study} />
        <span className="text-white">Eat</span>
        <ProgressBar variant="warning" now={props.eat} />
        <span className="text-white">Sleep</span>
        <ProgressBar variant="warning" now={props.sleep} />
        <span className="text-white">Entertain</span>
        <ProgressBar variant="warning" now={props.entertain} />
      </div>
    </div>
  );
}
