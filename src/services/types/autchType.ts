export type TsendRegisterUser = {
    name: string;
    email: string;
    password: string;
}
export type TautchUser = {
    email: string;
    password: string;
}
export type TforgotPasswordApi = {
    email: string;
}
export type TresetPasswordApi = {
    password: string;
    token?: string;
}
export type TsendProfileData = {
    name: string;
    password: string;
    email: string;

}
export type TlogoutUserApi = {
    token?: string | null;
}