import { Request, Response, NextFunction } from 'express';
import * as httpContext from 'express-http-context';

/** This middleware is overlapping `express-http-context` package, later will deserialize data from the request object and adding the data into the context  */
const middleware = (req: Request, res: Response, next: NextFunction) => {
    return httpContext.middleware(req, res, () => {
         /**
         * Thinking about utilizing cookies or request headers later on for 
         * context settingn using:
         * httpContext.set(key, value);
         */

        next();
    });
}

/**
 * Gets a value from the context by key.  Will return undefined if the context has not yet been initialized for this request or if a value is not found for the specified key.
 * @param {string} key
 * @returns The value represented by the key - can be any
 */
const get = (key: string): any => {
    return httpContext.get(key);
};

/**
 * Adds a value to the context by key.  If the key already exists, its value will be overwritten.  No value will persist if the context has not yet been initialized.
 * @param {string} key 
 * @param {*} value 
 */
const set = (key: string, value: any): void => {
    httpContext.set(key, value);
};

/**
 * This function return the full context object or null if not exist
 */
const getFullContext = (): any => {
    const { ns } = httpContext;
    return ns && ns.active;
};

export {
    middleware,
    get,
    set,
    getFullContext
}