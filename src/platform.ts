/**
 * @author WMXPY
 * @namespace Platform
 * @description Platform
 */

import { BarkPreference } from "@barksh/preference";

export abstract class BarkPlatform {

    public abstract platform: string;

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    protected constructor() {
    }

    public abstract readBarkPreference(): BarkPreference | Promise<BarkPreference>;
    public abstract writeBarkPreference(preference: BarkPreference): Promise<void>;

    public abstract getInstalledPackages(): string[] | Promise<string[]>;
}
