import base64 from "base-64";
import fetch from "node-fetch";
import pkgConfig from "../package.json";
import Constants from "./constants";
import { IOmiseConfig, IOmise } from './types'

const VAULT_ENDPOINT = "https://vault.omise.co";

function Omise(OmiseConfig: IOmiseConfig): IOmise {
  const headers = {
    Authorization: `Basic ${base64.encode(OmiseConfig.publicKey)}`,
    "User-Agent": `${pkgConfig.name}`,
    "Content-Type": "application/json",
    "Omise-Version": OmiseConfig.apiVersion,
  };

  return {
    createToken: (cardData) => {
      const TOKEN_ENDPOINT = `${VAULT_ENDPOINT}/tokens`;

      return new Promise((resolve, reject) =>
        fetch(TOKEN_ENDPOINT, {
          method: "POST",
          headers,
          body: JSON.stringify(cardData),
        })
          .then((response) => {
            if (response.ok && response.status === Constants.HTTP_STATUS_OK)
              return resolve(response.json());

            return reject(response.json());
          })
          .catch((error) => reject(error))
      );
    },
  };
}

export default Omise;
