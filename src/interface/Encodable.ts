import Encoder from "./Encoder";

export default interface Encodable {
    encode(encoder: Encoder): void
}