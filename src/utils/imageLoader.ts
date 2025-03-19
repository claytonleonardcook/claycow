import type { Loader } from "astro/loaders";
import fs from "fs";
import { exiftool } from "exiftool-vendored";

function image(fileName: string): Loader {
    return {
        name: 'png',
        load: async ({ store, parseData, generateDigest }) => {
            store.keys().forEach((id) => store.delete(id));

            const directory = fs.readdirSync(fileName).filter((file) => file.endsWith(".png"));

            const images = await Promise.all(
                directory.map(async (path) => {
                    const metadata = await exiftool.read(`${fileName}/${path}`);

                    const title = metadata.Title;
                    const artist = metadata.Artist;
                    const alt = metadata.Description || metadata.ImageDescription;
                    const width = metadata.ImageWidth;
                    const height = metadata.ImageHeight;

                    return {
                        id: path.toLowerCase().replaceAll('\S', '_').replace(/\.png/, ''),
                        title,
                        artist,
                        alt,
                        width,
                        height,
                        image: `./${path}`,
                        path: `${fileName}/${path}`
                    };
                })
            );

            images.forEach(async ({ id, path, ...image }) => {
                const data = await parseData({
                    id,
                    data: { path, ...image },
                    filePath: path
                });

                const digest = generateDigest(data);

                store.set({
                    id,
                    data,
                    filePath: path,
                    digest
                });
            });
        }
    };
}

export default image;