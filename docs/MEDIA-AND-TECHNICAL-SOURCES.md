# Media and technical sources

## Aeoliada trailer

The owner supplied `Aeoliada_trailer.mp4`. A website copy was encoded with Windows MediaTranscoder as H.264/AAC MP4, 1280 × 720, 30 fps, approximately 66 seconds, with audio retained. It is presented as Arcanion's official game trailer, separate from the owner's individual contribution.

Official game page: https://store.steampowered.com/app/3813780/Aeoliada/

## Virtual Awurudu

Official RAM Studios cinematic teaser: https://www.youtube.com/watch?v=yzVl4EppNAo

The pot-breaking activity is visible around 0:53–1:00. That excerpt is presented as cinematic game context, not proof of the owner's replication fix. The four game categories correspond to game folders and Blueprint/Level Sequence asset names in the supplied Unreal project: KanaMutti, KottaPora, KambaAdima, GreaseTree. No proprietary assets or source were copied into the portfolio.

The project file identifies Unreal Engine 5.1. The owner reported fixing a replication bug by enabling sequence replication. Epic's version-specific reference names the LevelSequenceActor property `replicate_playback` / **Replicate Playback**, which synchronizes server sequence playback across clients:

https://dev.epicgames.com/documentation/en-us/unreal-engine/python-api/class/LevelSequenceActor?application_version=5.1

Documentation confirms the setting's behavior; it does not independently verify the historical fix or establish which game sequences were changed. The portfolio does not claim a fresh multiplayer test was performed in this task.
