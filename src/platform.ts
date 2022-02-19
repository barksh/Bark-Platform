/**
 * @author WMXPY
 * @namespace Platform
 * @description Platform
 */

import { BarkPreference } from "@barksh/preference";

export abstract class BarkPlatform {

    protected constructor() {
    }

    public abstract platform: string;

    public abstract readBarkPreference(): BarkPreference | Promise<BarkPreference>;
    public abstract writeBarkPreference(preference: BarkPreference): Promise<void>;
}
