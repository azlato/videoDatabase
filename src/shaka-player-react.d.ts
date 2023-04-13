declare module 'shaka-player-react' {
  export interface IPlayer {
    async load(string): Promise<unknown>;
  }

  export interface IPlayerRef {
    player: IPlayer;
    videoElement: HTMLVideoElement;
  }

  function ShakaPlayer(
    prop: {
      className?: string;
      ref: React.Ref<IPlayerRef>
    }
  ): React.ReactElement;

  export default ShakaPlayer;
}
