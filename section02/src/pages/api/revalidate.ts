import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        await res.revalidate("/");
        return res.json({ revalidate: true });
    } catch (err) {
        res.status(500).send("Revalidation Failed");
    }
}
