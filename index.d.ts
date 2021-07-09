declare class PlayTogether {
    constructor(client: any, applications?: {
        [key: string]: string;
    });
    generateTogetherCode(voiceChannelId: any, option: any): Promise<{
        code: string;
    }>;
}
export { PlayTogether };