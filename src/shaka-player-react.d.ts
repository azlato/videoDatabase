declare module 'shaka-player-react' {
    function ShakaPlayer(prop: { className: string; ref: React.Ref<{player: any; videoElement: HTMLVideoElement}> }): React.ReactElement;

    export default ShakaPlayer;
}