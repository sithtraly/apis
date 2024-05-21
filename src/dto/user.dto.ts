import { ApiProperty } from "@nestjs/swagger"

export class UserDTO {
  @ApiProperty()
  username: string

  @ApiProperty()
  password: string
}

export class UserUpdaetDTO extends UserDTO{
  @ApiProperty()
  id: number
}
