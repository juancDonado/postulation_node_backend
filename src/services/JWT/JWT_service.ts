import jwt from "jsonwebtoken";

class JWTService {
    private tokenType: string = '';

    public generateJWT(playload: any): any {
        try {

            this.tokenType = process.env.JSON_WEB_TOKEN_KEY!;

            const accessToken = jwt.sign({ playload }, this.tokenType, {
                algorithm: 'HS256'
            });

            return accessToken;
        } catch (error) {
            console.log(error);
            return '';
        }
    }

    public validateAccessJWT(accessToken: any): any {
        try {
            const { playload }: any = jwt.verify(accessToken, process.env.JSON_WEB_TOKEN_KEY!)

            const response = { success: true, playload }

            return response
        } catch (error) {

            return { success: false }
        }
    }
}

export default new JWTService();