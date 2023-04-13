export interface IPlayer {
  async load(string): Promise<unknown>;
}

interface IPlayerRef {
  player: IPlayer;
  videoElement: HTMLVideoElement;
}

declare module 'shaka-player-react' {
  function ShakaPlayer(
    prop: {
      className: string;
      ref: React.Ref<IPlayerRef>
    }
  ): React.ReactElement;

  export default ShakaPlayer;
}
