// import {createClass} from "asteroid";
import {createClass} from "../../../../node_modules/asteroid/src/asteroid";


const Asteroid = createClass();
// Connect to a Meteor backend
export const asteroid = new Asteroid({
    endpoint: "ws://localhost:4000/websocket"
});
