import { BLUESKY_DID } from "@/consts";
import { AtpAgent } from '@atproto/api'

async function getBlueskyAvatar() {
    const agent = new AtpAgent({ service: new URL("https://public.api.bsky.app") })

    const avatar = await agent.app.bsky.actor.getProfile({
        actor: BLUESKY_DID
    }).then(({ data }) => data.avatar);

    if (!avatar) throw new Error("There was an error getting the Bluesky avatar!");

    return avatar;
}

export default getBlueskyAvatar;