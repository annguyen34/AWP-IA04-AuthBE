import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: any): Promise<any>;
    login(body: any): Promise<{
        access_token: string;
        user: {
            username: any;
            email: any;
        };
    } | {
        message: string;
    }>;
    getProfile(req: any): any;
}
