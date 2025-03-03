import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from './auth.controller';
import { AuthService } from "./auth.service";
import { LocalStrategy } from './local-strategy/local-strategy';
import { JwtStrategy } from './jwt-strategy/jwt-strategy';
import { UsuarioModule } from "../users/users.module";
import { ConfigModule } from '@nestjs/config';  // Para cargar las variables de entorno

@Module({
  imports: [
    UsuarioModule,
    PassportModule,
    ConfigModule.forRoot(),  // Cargar las variables de entorno
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default_secret', // Usar variable de entorno o un valor por defecto
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
