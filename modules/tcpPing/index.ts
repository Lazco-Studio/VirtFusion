import { isFinite as lodashIsFinite } from "lodash";
import tcpp from "tcp-ping";

interface PingResult extends tcpp.Result {
  alive: boolean;
}

export async function pingServer(options: tcpp.Options): Promise<PingResult> {
  const data: Promise<tcpp.Result> = new Promise((resolve, reject) => {
    tcpp.ping(options, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

  return {
    alive: lodashIsFinite((await data).avg),
    ...(await data),
  } as unknown as PingResult;
}
