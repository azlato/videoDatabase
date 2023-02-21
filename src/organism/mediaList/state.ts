import { createSlice } from '@reduxjs/toolkit';

export interface MediaListState {
    isLoading: false;
    data: unknown;
}

const initialState = {
    isLoading: false,
    data: {
        items: [
            {
              "name": "Big Buck Bunny: the Dark Truths of a Video Dev Cartoon (DASH)",
              "shortName": "",
              "iconUri": "https://storage.googleapis.com/shaka-asset-icons/dark_truth.png",
              "manifestUri": "https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths/dash.mpd",
              "source": "DEMO_SHAKA",
              "focus": false,
              "disabled": false,
              "extraText": [],
              "certificateUri": null,
              "description": null,
              "isFeatured": false,
              "drm": [
                "DEMO_CLEAR"
              ],
              "features": [
                "DEMO_DASH",
                "DEMO_HIGH_DEFINITION",
                "DEMO_MP4",
                "DEMO_OFFLINE",
                "DEMO_VOD",
                "DEMO_WEBM"
              ],
              "licenseServers": {
              },
              "licenseRequestHeaders": {
              },
              "requestFilter": null,
              "responseFilter": null,
              "clearKeys": {
              },
              "extraConfig": null,
              "adTagUri": null,
              "imaVideoId": null,
              "imaAssetKey": null,
              "imaContentSrcId": null,
              "mimeType": null,
              "mediaPlaylistFullMimeType": null,
              "storedProgress": 1,
              "storedContent": null
            },
            {
              "name": "Big Buck Bunny: the Dark Truths of a Video Dev Cartoon (HLS)",
              "shortName": "Big Buck Bunny: the Dark Truths",
              "iconUri": "https://storage.googleapis.com/shaka-asset-icons/dark_truth.png",
              "manifestUri": "https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8",
              "source": "DEMO_SHAKA",
              "focus": false,
              "disabled": false,
              "extraText": [],
              "certificateUri": null,
              "description": "A serious documentary about a problem plaguing video developers.",
              "isFeatured": true,
              "drm": [
                "DEMO_CLEAR"
              ],
              "features": [
                "DEMO_HIGH_DEFINITION",
                "DEMO_HLS",
                "DEMO_MP4",
                "DEMO_OFFLINE",
                "DEMO_VOD"
              ],
              "licenseServers": {
              },
              "licenseRequestHeaders": {
              },
              "requestFilter": null,
              "responseFilter": null,
              "clearKeys": {
              },
              "extraConfig": null,
              "adTagUri": null,
              "imaVideoId": null,
              "imaAssetKey": null,
              "imaContentSrcId": null,
              "mimeType": null,
              "mediaPlaylistFullMimeType": null,
              "storedProgress": 1,
              "storedContent": {
                "offlineUri": "offline:manifest/idb/v3/2",
                "originalManifestUri": "https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8",
                "duration": 372.333,
                "size": 46198111,
                "expiration": null,
                "tracks": [
                  {
                    "id": 10,
                    "active": false,
                    "type": "variant",
                    "bandwidth": 0,
                    "language": "en",
                    "label": "stream_0",
                    "kind": null,
                    "width": 834,
                    "height": 480,
                    "frameRate": null,
                    "pixelAspectRatio": null,
                    "hdr": null,
                    "mimeType": "video/mp4",
                    "audioMimeType": "audio/mp4",
                    "videoMimeType": "video/mp4",
                    "codecs": "avc1.4d401f, mp4a.40.2",
                    "audioCodec": "mp4a.40.2",
                    "videoCodec": "avc1.4d401f",
                    "primary": true,
                    "roles": [],
                    "audioRoles": [],
                    "forced": false,
                    "videoId": 9,
                    "audioId": 1,
                    "channelsCount": null,
                    "audioSamplingRate": null,
                    "spatialAudio": false,
                    "tilesLayout": null,
                    "audioBandwidth": null,
                    "videoBandwidth": null,
                    "originalVideoId": null,
                    "originalAudioId": "stream_0",
                    "originalTextId": null,
                    "originalImageId": null
                  }
                ],
                "appMetadata": {
                  "identifier": "Big Buck Bunny: the Dark Truths of a Video Dev Cartoon (HLS)",
                  "downloaded": "2019-07-09T08:36:48.768Z"
                },
                "isIncomplete": false
              }
            },
            {
              "name": "Angel One (multicodec, multilingual)",
              "shortName": "Angel One",
              "iconUri": "https://storage.googleapis.com/shaka-asset-icons/angel_one.png",
              "manifestUri": "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd",
              "source": "DEMO_SHAKA",
              "focus": false,
              "disabled": false,
              "extraText": [],
              "certificateUri": null,
              "description": "A clip from a classic Star Trek TNG episode, presented in MPEG-DASH.",
              "isFeatured": true,
              "drm": [
                "DEMO_CLEAR"
              ],
              "features": [
                "DEMO_DASH",
                "DEMO_MP4",
                "DEMO_MULTIPLE_LANGUAGES",
                "DEMO_OFFLINE",
                "DEMO_SUBTITLES",
                "DEMO_VOD",
                "DEMO_WEBM"
              ],
              "licenseServers": {
              },
              "licenseRequestHeaders": {
              },
              "requestFilter": null,
              "responseFilter": null,
              "clearKeys": {
              },
              "extraConfig": null,
              "adTagUri": null,
              "imaVideoId": null,
              "imaAssetKey": null,
              "imaContentSrcId": null,
              "mimeType": null,
              "mediaPlaylistFullMimeType": null,
              "storedProgress": 1,
              "storedContent": {
                "offlineUri": "offline:manifest/idb/v3/1",
                "originalManifestUri": "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd",
                "duration": 60,
                "size": 8691571,
                "expiration": null,
                "tracks": [
                  {
                    "id": 70,
                    "active": false,
                    "type": "variant",
                    "bandwidth": 0,
                    "language": "en",
                    "label": null,
                    "kind": null,
                    "width": 640,
                    "height": 480,
                    "frameRate": 25,
                    "pixelAspectRatio": null,
                    "hdr": null,
                    "mimeType": "video/mp4",
                    "audioMimeType": "audio/mp4",
                    "videoMimeType": "video/mp4",
                    "codecs": "avc1.4d401f, mp4a.40.2",
                    "audioCodec": "mp4a.40.2",
                    "videoCodec": "avc1.4d401f",
                    "primary": true,
                    "roles": [],
                    "audioRoles": [],
                    "forced": false,
                    "videoId": 10,
                    "audioId": 14,
                    "channelsCount": null,
                    "audioSamplingRate": null,
                    "spatialAudio": false,
                    "tilesLayout": null,
                    "audioBandwidth": null,
                    "videoBandwidth": null,
                    "originalVideoId": 24,
                    "originalAudioId": 9,
                    "originalTextId": null,
                    "originalImageId": null
                  }
                ],
                "appMetadata": {
                  "identifier": "Angel One (multicodec, multilingual)",
                  "downloaded": "2019-07-09T08:34:57.450Z"
                },
                "isIncomplete": false
              }
            },
          ]
    }
}

export const mediaListSlice = createSlice({
    name: "mediaList",
    initialState,
    reducers: {}
});

export default mediaListSlice.reducer;
