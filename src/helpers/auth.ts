import {User} from "./types";

export const isAuth = JSON.parse(localStorage.getItem('isAuth') || "false") || false
export const users: Array<User> | [] = JSON.parse(localStorage.getItem('users') || "[]") || []
export const user: User | null = JSON.parse(localStorage.getItem('user') || "null") || null
