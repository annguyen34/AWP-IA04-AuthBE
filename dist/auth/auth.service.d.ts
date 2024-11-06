import { Model } from 'mongoose';
import { UserDocument } from 'src/models/user.schema';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    register(email: string, username: string, password: string): Promise<any>;
    validateUser(username: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        user: {
            username: any;
            email: any;
        };
    }>;
}
