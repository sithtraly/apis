import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  private data: any = [
    { id: 1, username: "amin", password: "123" },
    { id: 2, username: "billy", password: "123" },
  ];

  getHello(): string {
    return this.data;
  }

  createUser(username: string, password: string) {
    const id = this.data.length + 1;
    this.data.push({ id: id, username: username, password: password });
  }

  updateUser(obj: { id: number; username: string; password: string }) {
    const idx = this.data.findIndex((d: any) => d.id === obj.id);
    const user = this.data[idx];
    user.username = obj.username;
    user.password = obj.password;
    this.data[idx] = user;
  }
}
