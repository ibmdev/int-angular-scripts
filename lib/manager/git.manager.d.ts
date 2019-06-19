export declare function getBranch(): Promise<any>;
export declare function getRevision(level: string): Promise<any>;
export declare function unstage(): Promise<any>;
export declare function stage(filenames: string): Promise<any>;
export declare function commit(message: string, filenames: string): Promise<any>;
export declare function push(branch: string): Promise<any>;
export declare function discard(filename: string): Promise<{
    stdout: string;
    stderr: string;
}>;
