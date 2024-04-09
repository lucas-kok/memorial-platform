/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/app/app.controller.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const app_service_1 = __webpack_require__("./apps/api/src/app/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = __decorate([
    (0, common_1.Controller)(''),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const app_controller_1 = __webpack_require__("./apps/api/src/app/app.controller.ts");
const app_service_1 = __webpack_require__("./apps/api/src/app/app.service.ts");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const user_module_1 = __webpack_require__("./apps/api/src/app/user/user.module.ts");
const auth_module_1 = __webpack_require__("./apps/api/src/app/auth/auth.module.ts");
const person_module_1 = __webpack_require__("./apps/api/src/app/persons/person.module.ts");
const funeral_module_1 = __webpack_require__("./apps/api/src/app/funeral/funeral.module.ts");
const memorial_module_1 = __webpack_require__("./apps/api/src/app/memorials/memorial.module.ts");
const message_module_1 = __webpack_require__("./apps/api/src/app/messages/message.module.ts");
let AppModule = class AppModule {
    constructor() { }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: () => ({
                    uri: process.env['MONGODB_CONNECTION_STRING'],
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true,
                    useFindAndModify: false,
                }),
            }),
            user_module_1.UsersModule,
            auth_module_1.AuthModule,
            person_module_1.PersonModule,
            funeral_module_1.FuneralModule,
            memorial_module_1.MemorialModule,
            message_module_1.MessageModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__("@nestjs/common");
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to api!' };
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/api/src/app/auth/auth.controller.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const express_1 = __webpack_require__("express");
const auth_service_1 = __webpack_require__("./apps/api/src/app/auth/auth.service.ts");
const user_dto_1 = __webpack_require__("./apps/api/src/app/user/user.dto.ts");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    login(userLoginDto, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.authService.validateUser(userLoginDto);
            if (user == null) {
                return res.status(404).json({
                    status: 404,
                    error: 'Invalid login attempt',
                });
            }
            const result = yield this.authService.login(user);
            return res.status(200).json({
                status: 200,
                result: {
                    jwtToken: result,
                    userId: user._id,
                    email: user.email,
                },
            });
        });
    }
};
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof user_dto_1.UserLoginDto !== "undefined" && user_dto_1.UserLoginDto) === "function" ? _b : Object, typeof (_c = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./apps/api/src/app/auth/auth.module.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const user_module_1 = __webpack_require__("./apps/api/src/app/user/user.module.ts");
const auth_service_1 = __webpack_require__("./apps/api/src/app/auth/auth.service.ts");
const passport_1 = __webpack_require__("@nestjs/passport");
const jwt_1 = __webpack_require__("@nestjs/jwt");
const auth_controller_1 = __webpack_require__("./apps/api/src/app/auth/auth.controller.ts");
const users_service_1 = __webpack_require__("./apps/api/src/app/user/users.service.ts");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const user_model_1 = __webpack_require__("./apps/api/src/app/user/user.model.ts");
const jwt_strategy_1 = __webpack_require__("./apps/api/src/app/auth/jwt.strategy.ts");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UsersModule,
            passport_1.PassportModule.register({ session: true }),
            jwt_1.JwtModule.register({
                secret: 'keyboard cat',
            }),
            mongoose_1.MongooseModule.forFeature([{ name: 'user', schema: user_model_1.UserSchema }]),
        ],
        providers: [auth_service_1.AuthService, users_service_1.UsersService, jwt_strategy_1.JwtStrategy],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/api/src/app/auth/auth.service.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const users_service_1 = __webpack_require__("./apps/api/src/app/user/users.service.ts");
const bcrypt = __webpack_require__("bcrypt");
const jwt_1 = __webpack_require__("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    validateUser(userLoginDto) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[AuthService] validateUser called');
            common_1.Logger.log(userLoginDto);
            const user = yield this.userService.getUserByEmail(userLoginDto.email);
            if (!user) {
                common_1.Logger.log('[AuthService] No user found with email: {' + userLoginDto.email + '}');
                return null;
            }
            common_1.Logger.log('[AuthSerice] User found with email: {' + userLoginDto.email + '}');
            common_1.Logger.log('UserLogin password: {' +
                userLoginDto.password +
                '}, UserPassword: {' +
                user.password +
                '}');
            const passwordValid = yield bcrypt.compare(userLoginDto.password, user.password);
            if (passwordValid) {
                common_1.Logger.log('[AuthService] Invalid password for user with email: {' +
                    userLoginDto.email +
                    '}');
                return user;
            }
            return null;
        });
    }
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[AuthService] login called');
            common_1.Logger.log(user);
            const payload = {
                _id: user._id,
                email: user.email,
            };
            const jwtToken = this.jwtService.sign(payload);
            common_1.Logger.log('[AuthService] JwtToken created: {' + jwtToken + '}');
            return jwtToken;
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./apps/api/src/app/auth/jwt-auth.guard.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),

/***/ "./apps/api/src/app/auth/jwt.strategy.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const passport_1 = __webpack_require__("@nestjs/passport");
const passport_jwt_1 = __webpack_require__("passport-jwt");
class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'keyboard cat',
        });
    }
    validate(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                _id: payload._id,
                email: payload.email,
            };
        });
    }
}
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./apps/api/src/app/funeral/funeral.dto.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FuneralDto = void 0;
const class_validator_1 = __webpack_require__("class-validator");
class FuneralDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", Object)
], FuneralDto.prototype, "personId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], FuneralDto.prototype, "dateTime", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], FuneralDto.prototype, "adress", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], FuneralDto.prototype, "postalCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], FuneralDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], FuneralDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Object)
], FuneralDto.prototype, "isPrivate", void 0);
exports.FuneralDto = FuneralDto;


/***/ }),

/***/ "./apps/api/src/app/funeral/funeral.model.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FuneralSchema = exports.Funeral = void 0;
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
let Funeral = class Funeral {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'user' }),
    __metadata("design:type", Object)
], Funeral.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'person' }),
    __metadata("design:type", Object)
], Funeral.prototype, "person", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'Date' }),
    __metadata("design:type", Object)
], Funeral.prototype, "dateTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string' }),
    __metadata("design:type", Object)
], Funeral.prototype, "adress", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string' }),
    __metadata("design:type", Object)
], Funeral.prototype, "postalCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string' }),
    __metadata("design:type", Object)
], Funeral.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string' }),
    __metadata("design:type", Object)
], Funeral.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'boolean' }),
    __metadata("design:type", Object)
], Funeral.prototype, "isPrivate", void 0);
Funeral = __decorate([
    (0, mongoose_1.Schema)()
], Funeral);
exports.Funeral = Funeral;
exports.FuneralSchema = mongoose_1.SchemaFactory.createForClass(Funeral);


/***/ }),

/***/ "./apps/api/src/app/funeral/funeral.module.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FuneralModule = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const person_model_1 = __webpack_require__("./apps/api/src/app/persons/person.model.ts");
const persons_service_1 = __webpack_require__("./apps/api/src/app/persons/persons.service.ts");
const funeral_model_1 = __webpack_require__("./apps/api/src/app/funeral/funeral.model.ts");
const funerals_controller_1 = __webpack_require__("./apps/api/src/app/funeral/funerals.controller.ts");
const funerals_service_1 = __webpack_require__("./apps/api/src/app/funeral/funerals.service.ts");
let FuneralModule = class FuneralModule {
};
FuneralModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'funeral', schema: funeral_model_1.FuneralSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'person', schema: person_model_1.PersonSchema }]),
        ],
        providers: [funerals_service_1.FuneralsService, persons_service_1.PersonsService],
        controllers: [funerals_controller_1.FuneralsController],
    })
], FuneralModule);
exports.FuneralModule = FuneralModule;


/***/ }),

/***/ "./apps/api/src/app/funeral/funerals.controller.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FuneralsController = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const express_1 = __webpack_require__("express");
const jwt_auth_guard_1 = __webpack_require__("./apps/api/src/app/auth/jwt-auth.guard.ts");
const persons_service_1 = __webpack_require__("./apps/api/src/app/persons/persons.service.ts");
const auth_inforequest_interface_1 = __webpack_require__("./apps/api/src/app/shared/auth.inforequest.interface.ts");
const id_validator_1 = __webpack_require__("./apps/api/src/app/shared/id.validator.ts");
const funeral_dto_1 = __webpack_require__("./apps/api/src/app/funeral/funeral.dto.ts");
const funerals_service_1 = __webpack_require__("./apps/api/src/app/funeral/funerals.service.ts");
let FuneralsController = class FuneralsController {
    constructor(funeralsService, personsService) {
        this.funeralsService = funeralsService;
        this.personsService = personsService;
    }
    addFuneral(funeralDto, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestId = req.user._id;
            common_1.Logger.log('[FuneralsController][POST]/funerals called');
            common_1.Logger.log(funeralDto);
            const person = yield this.personsService.getPersonById(funeralDto.personId);
            if (!person) {
                return res.status(404).json({
                    status: 404,
                    error: "Person with id: {" + funeralDto.personId + "} not found",
                });
            }
            const funeral = yield this.funeralsService.addFuneral(funeralDto, requestId);
            return res.status(201).json({
                status: 201,
                result: funeral,
            });
        });
    }
    getAllFunerals(res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[FuneralsController][GET]/funerals called');
            const funerals = yield this.funeralsService.getAllFunerals();
            return res.status(200).json({
                status: 200,
                result: funerals,
            });
        });
    }
    getFuneralById(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[FuneralsController][GET]/funerals/' + id + ' called');
            if (!id_validator_1.IdValidator.validate(id)) {
                return res.status(400).json({
                    status: 400,
                    error: 'Id is not in a valid string format',
                });
            }
            const funeral = yield this.funeralsService.getFuneralById(id);
            if (!funeral) {
                return res.status(404).json({
                    status: 404,
                    error: 'Funeral with id: {' + id + '} not found',
                });
            }
            return res.status(200).json({
                status: 200,
                result: funeral,
            });
        });
    }
    getFuneralByPersonId(personId, res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[FuneralsCotnroller][GET]/funerals/person/' + personId + ' called');
            if (!id_validator_1.IdValidator.validate(personId)) {
                return res.status(400).json({
                    status: 400,
                    error: 'PersonId is not in a valid string format',
                });
            }
            const funeral = yield this.funeralsService.getFuneralByPersonId(personId);
            if (!funeral) {
                return res.status(404).json({
                    status: 404,
                    error: 'Funeral with personId: {' + personId + '} not found',
                });
            }
            return res.status(200).json({
                status: 200,
                resut: funeral,
            });
        });
    }
    updateFuneral(id, funeralDto, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[FuneralsController][PUT]/funerals/' + id + ' called');
            if (!id_validator_1.IdValidator.validate(id)) {
                return res.status(400).json({
                    status: 400,
                    error: 'Id is not in a valid string format',
                });
            }
            const findFuneral = yield this.funeralsService.getFuneralById(id);
            if (!findFuneral) {
                return res.status(404).json({
                    status: 404,
                    error: 'Funeral with id: {' + id + '} not found',
                });
            }
            const person = yield this.personsService.getPersonById(funeralDto.personId);
            if (!person) {
                return res.status(404).json({
                    status: 404,
                    error: "Person with id: {" + funeralDto.personId + "} not found",
                });
            }
            const requestId = req.user._id;
            if (requestId != findFuneral.userId) {
                return res.status(403).json({
                    status: 403,
                    error: "You don't have permission to update this funeral",
                });
            }
            const funeral = yield this.funeralsService.updateFuneral(id, requestId, funeralDto);
            return res.status(201).json({
                status: 201,
                result: funeral,
            });
        });
    }
    removeFuneralById(id, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[FuneralsController][DELETE]/funerals/' + id + ' called');
            if (!id_validator_1.IdValidator.validate(id)) {
                return res.status(400).json({
                    status: 400,
                    error: 'Id is not in a valid string format',
                });
            }
            const funeral = yield this.funeralsService.getFuneralById(id);
            if (!funeral) {
                return res.status(404).json({
                    status: 404,
                    error: 'Funeral with id: {' + id + '} not found',
                });
            }
            const requestId = req.user._id;
            if (requestId != funeral.userId) {
                return res.status(403).json({
                    status: 403,
                    error: "You don't have permission to delete this funeral",
                });
            }
            yield this.funeralsService.removeFuneralById(id);
            return res.status(200).json({
                status: 200,
                message: 'Funeral with id: {' + id + '} deleted',
            });
        });
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof funeral_dto_1.FuneralDto !== "undefined" && funeral_dto_1.FuneralDto) === "function" ? _c : Object, typeof (_d = typeof auth_inforequest_interface_1.IGetUserAuthInfoReqeust !== "undefined" && auth_inforequest_interface_1.IGetUserAuthInfoReqeust) === "function" ? _d : Object, typeof (_e = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], FuneralsController.prototype, "addFuneral", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], FuneralsController.prototype, "getAllFunerals", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_g = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], FuneralsController.prototype, "getFuneralById", null);
__decorate([
    (0, common_1.Get)('/person/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_h = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], FuneralsController.prototype, "getFuneralByPersonId", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_j = typeof funeral_dto_1.FuneralDto !== "undefined" && funeral_dto_1.FuneralDto) === "function" ? _j : Object, typeof (_k = typeof auth_inforequest_interface_1.IGetUserAuthInfoReqeust !== "undefined" && auth_inforequest_interface_1.IGetUserAuthInfoReqeust) === "function" ? _k : Object, typeof (_l = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _l : Object]),
    __metadata("design:returntype", Promise)
], FuneralsController.prototype, "updateFuneral", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_m = typeof auth_inforequest_interface_1.IGetUserAuthInfoReqeust !== "undefined" && auth_inforequest_interface_1.IGetUserAuthInfoReqeust) === "function" ? _m : Object, typeof (_o = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _o : Object]),
    __metadata("design:returntype", Promise)
], FuneralsController.prototype, "removeFuneralById", null);
FuneralsController = __decorate([
    (0, common_1.Controller)('funerals'),
    __metadata("design:paramtypes", [typeof (_a = typeof funerals_service_1.FuneralsService !== "undefined" && funerals_service_1.FuneralsService) === "function" ? _a : Object, typeof (_b = typeof persons_service_1.PersonsService !== "undefined" && persons_service_1.PersonsService) === "function" ? _b : Object])
], FuneralsController);
exports.FuneralsController = FuneralsController;


/***/ }),

/***/ "./apps/api/src/app/funeral/funerals.service.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FuneralsService = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
let FuneralsService = class FuneralsService {
    constructor(funeralModel) {
        this.funeralModel = funeralModel;
    }
    addFuneral(funeralDto, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[FuneralsService] addfuneral called with userId: {' + userId + '}');
            common_1.Logger.log(funeralDto);
            const funeral = Object.assign({ userId, person: funeralDto.personId }, funeralDto);
            return yield (yield this.funeralModel.create(funeral)).populate('person', '_id name');
        });
    }
    getAllFunerals() {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[FuneralsService] getAllFunerals called');
            return yield this.funeralModel.find({}).populate('person', '_id name');
        });
    }
    getFuneralById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[FuneralsService] getFuneralById(' + _id + ') called');
            return yield this.funeralModel
                .findById({ _id: new mongoose_2.Types.ObjectId(_id) })
                .populate('person', '_id name imageBase64');
        });
    }
    getFuneralByPersonId(personId) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[FuneralsService] getFuneralByPersonId(' + personId + ') called');
            return yield this.funeralModel
                .findOne({ personId: personId })
                .populate('person', '_id name');
        });
    }
    updateFuneral(_id, userId, funeralDto) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[FuneralsService] updateFuneral(' +
                _id +
                ') called with userId: {' +
                userId +
                '}');
            common_1.Logger.log(funeralDto);
            const funeral = Object.assign({ _id,
                userId }, funeralDto);
            return yield this.funeralModel
                .findOneAndUpdate({ _id: _id }, funeral, {
                new: true,
            })
                .populate('person', '_id name');
        });
    }
    removeFuneralById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[FuneralsService] removeFuneralById(' + _id + ') called');
            return yield this.funeralModel
                .findOneAndDelete({
                _id: _id,
            })
                .populate('person', '_id name');
        });
    }
};
FuneralsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('funeral')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], FuneralsService);
exports.FuneralsService = FuneralsService;


/***/ }),

/***/ "./apps/api/src/app/memorials/memorial.dto.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MemorialDto = void 0;
const class_validator_1 = __webpack_require__("class-validator");
class MemorialDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", Object)
], MemorialDto.prototype, "funeralId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], MemorialDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsBase64)(),
    __metadata("design:type", Object)
], MemorialDto.prototype, "imageBase64", void 0);
exports.MemorialDto = MemorialDto;


/***/ }),

/***/ "./apps/api/src/app/memorials/memorial.model.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MemorialSchema = exports.Memorial = void 0;
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
let Memorial = class Memorial {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'user' }),
    __metadata("design:type", Object)
], Memorial.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'funeral' }),
    __metadata("design:type", Object)
], Memorial.prototype, "funeralId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string' }),
    __metadata("design:type", Object)
], Memorial.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string' }),
    __metadata("design:type", Object)
], Memorial.prototype, "imageBase64", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: [], type: [] }),
    __metadata("design:type", Object)
], Memorial.prototype, "messages", void 0);
Memorial = __decorate([
    (0, mongoose_1.Schema)()
], Memorial);
exports.Memorial = Memorial;
exports.MemorialSchema = mongoose_1.SchemaFactory.createForClass(Memorial);


/***/ }),

/***/ "./apps/api/src/app/memorials/memorial.module.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MemorialModule = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const memorial_model_1 = __webpack_require__("./apps/api/src/app/memorials/memorial.model.ts");
const memorials_controller_1 = __webpack_require__("./apps/api/src/app/memorials/memorials.controller.ts");
const memorials_service_1 = __webpack_require__("./apps/api/src/app/memorials/memorials.service.ts");
const neo4j_driver_1 = __webpack_require__("neo4j-driver");
let MemorialModule = class MemorialModule {
};
MemorialModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'memorial', schema: memorial_model_1.MemorialSchema }]),
        ],
        providers: [
            memorials_service_1.MemorialsService,
            {
                provide: 'NEO4J',
                useFactory: () => {
                    const neo4jUri = process.env['NEO4J_URI'];
                    const neo4jUser = process.env['NEO4J_USERNAME'];
                    const neo4jPassword = process.env['NEO4J_PASSWORD'];
                    return neo4j_driver_1.default.driver(neo4jUri, neo4j_driver_1.default.auth.basic(neo4jUser, neo4jPassword));
                },
            },
        ],
        controllers: [memorials_controller_1.MemorialsController],
    })
], MemorialModule);
exports.MemorialModule = MemorialModule;


/***/ }),

/***/ "./apps/api/src/app/memorials/memorials.controller.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MemorialsController = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const express_1 = __webpack_require__("express");
const jwt_auth_guard_1 = __webpack_require__("./apps/api/src/app/auth/jwt-auth.guard.ts");
const auth_inforequest_interface_1 = __webpack_require__("./apps/api/src/app/shared/auth.inforequest.interface.ts");
const id_validator_1 = __webpack_require__("./apps/api/src/app/shared/id.validator.ts");
const memorial_dto_1 = __webpack_require__("./apps/api/src/app/memorials/memorial.dto.ts");
const memorials_service_1 = __webpack_require__("./apps/api/src/app/memorials/memorials.service.ts");
let MemorialsController = class MemorialsController {
    constructor(memorialsService) {
        this.memorialsService = memorialsService;
    }
    addMemorial(memorialDto, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MemorialsController][POST]/memorials called');
            common_1.Logger.log(memorialDto);
            const requestId = req.user._id;
            const memorial = yield this.memorialsService.addMemorial(memorialDto, requestId);
            return res.status(201).json({
                status: 201,
                result: memorial,
            });
        });
    }
    getAllMemorials(res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MemorialsController][GET]/memorials called');
            const memorials = yield this.memorialsService.getAllMemorials();
            return res.status(200).json({
                status: 200,
                result: memorials,
            });
        });
    }
    getMemorialById(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MemorialsController][GET]/memorials/' + id + ' called');
            if (!id_validator_1.IdValidator.validate(id)) {
                return res.status(400).json({
                    status: 400,
                    error: 'Id is not in a valid string format',
                });
            }
            const memorial = yield this.memorialsService.getMemorialById(id);
            if (!memorial) {
                return res.status(404).json({
                    status: 404,
                    error: 'Memorial with id: {' + id + '} not found',
                });
            }
            return res.status(200).json({
                status: 200,
                result: memorial,
            });
        });
    }
    getRecommendations(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MemorialsController][GET]/memorials/' + id + '/recommendations called');
            if (!id_validator_1.IdValidator.validate(id)) {
                return res.status(400).json({
                    status: 400,
                    error: 'Id is not in a valid string format',
                });
            }
            const recommendations = yield this.memorialsService.getTopMemorialsByMessageReactions(id);
            return res.status(200).json({
                status: 200,
                result: recommendations,
            });
        });
    }
    getMemorialByFuneralId(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MemorialsService][GET]/memorials/funeral/' + id + ' called');
            if (!id_validator_1.IdValidator.validate(id)) {
                return res.status(400).json({
                    status: 400,
                    error: 'Id is not in a valid string format',
                });
            }
            const memorial = yield this.memorialsService.getMemorialFromFuneralId(id);
            if (!memorial) {
                return res.status(404).json({
                    status: 404,
                    error: 'Memorial with funeralId: {' + id + '} not found',
                });
            }
            return res.status(200).json({
                status: 200,
                result: memorial,
            });
        });
    }
    updateMemorial(id, memorialDto, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MemorialsController][PUT]/memorials/' + id + ' called');
            common_1.Logger.log(memorialDto);
            if (!id_validator_1.IdValidator.validate(id)) {
                return res.status(400).json({
                    status: 400,
                    error: 'Id is not in a valid string format',
                });
            }
            const findMemorial = yield this.memorialsService.getMemorialById(id);
            if (!findMemorial) {
                return res.status(404).json({
                    status: 404,
                    error: 'Memorial with id: {' + id + '} not found',
                });
            }
            const requestId = req.user._id;
            if (requestId != findMemorial.userId) {
                return res.status(403).json({
                    status: 403,
                    error: "You don't have permission to update this memorial",
                });
            }
            const memorial = yield this.memorialsService.updateMemorial(id, requestId, memorialDto);
            return res.status(201).json({
                status: 201,
                result: memorial,
            });
        });
    }
    removeMemorialById(id, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MemorialsSerivce][DELETE]/memorials/' + id + ' called');
            if (!id_validator_1.IdValidator.validate(id)) {
                return res.status(400).json({
                    status: 400,
                    error: 'Id is not in a valid string format',
                });
            }
            const funeral = yield this.memorialsService.getMemorialById(id);
            if (!funeral) {
                return res.status(404).json({
                    status: 404,
                    error: 'Memorial with id: {' + id + '} not found',
                });
            }
            const requestId = req.user._id;
            if (requestId != funeral.userId) {
                return res.status(403).json({
                    status: 403,
                    error: "You don't have permission to delete this memorial",
                });
            }
            yield this.memorialsService.removeMemorialById(id);
            return res.status(200).json({
                status: 200,
                message: 'Memorial with id: {' + id + '} deleted',
            });
        });
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof memorial_dto_1.MemorialDto !== "undefined" && memorial_dto_1.MemorialDto) === "function" ? _b : Object, typeof (_c = typeof auth_inforequest_interface_1.IGetUserAuthInfoReqeust !== "undefined" && auth_inforequest_interface_1.IGetUserAuthInfoReqeust) === "function" ? _c : Object, typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], MemorialsController.prototype, "addMemorial", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], MemorialsController.prototype, "getAllMemorials", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_f = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], MemorialsController.prototype, "getMemorialById", null);
__decorate([
    (0, common_1.Get)(':id/recommendations'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_g = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], MemorialsController.prototype, "getRecommendations", null);
__decorate([
    (0, common_1.Get)('/funeral/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_h = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], MemorialsController.prototype, "getMemorialByFuneralId", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_j = typeof memorial_dto_1.MemorialDto !== "undefined" && memorial_dto_1.MemorialDto) === "function" ? _j : Object, typeof (_k = typeof auth_inforequest_interface_1.IGetUserAuthInfoReqeust !== "undefined" && auth_inforequest_interface_1.IGetUserAuthInfoReqeust) === "function" ? _k : Object, typeof (_l = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _l : Object]),
    __metadata("design:returntype", Promise)
], MemorialsController.prototype, "updateMemorial", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_m = typeof auth_inforequest_interface_1.IGetUserAuthInfoReqeust !== "undefined" && auth_inforequest_interface_1.IGetUserAuthInfoReqeust) === "function" ? _m : Object, typeof (_o = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _o : Object]),
    __metadata("design:returntype", Promise)
], MemorialsController.prototype, "removeMemorialById", null);
MemorialsController = __decorate([
    (0, common_1.Controller)('memorials'),
    __metadata("design:paramtypes", [typeof (_a = typeof memorials_service_1.MemorialsService !== "undefined" && memorials_service_1.MemorialsService) === "function" ? _a : Object])
], MemorialsController);
exports.MemorialsController = MemorialsController;


/***/ }),

/***/ "./apps/api/src/app/memorials/memorials.service.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MemorialsService = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
const neo4j_driver_1 = __webpack_require__("neo4j-driver");
let MemorialsService = class MemorialsService {
    constructor(neo4jDriver, memorialModel) {
        this.neo4jDriver = neo4jDriver;
        this.memorialModel = memorialModel;
    }
    addMemorial(MemorialDto, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MemorialsService] addMemorial called with userId: {' + userId + '}');
            common_1.Logger.log(MemorialDto);
            const memorial = Object.assign({ userId }, MemorialDto);
            return yield this.memorialModel.create(memorial);
        });
    }
    getAllMemorials() {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MemorialsService] getAllMemorials called');
            return yield this.memorialModel.find({});
        });
    }
    getTopMemorialsByMessageReactions(memorialId) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MemorialsService] getTopMemorialsByMessageReactions(' +
                memorialId +
                ') called');
            const session = this.neo4jDriver.session();
            const result = yield session.run(`
      MATCH (m:Memorial { memorialId: $memorialId })<-[r1:REACTED_TO]-(u1:User)-[r2:REACTED_TO]->(m2:Memorial)
      WHERE m <> m2
      WITH m2.memorialId AS memorialId, count(*) AS reactions
      ORDER BY reactions DESC
      RETURN memorialId
      LIMIT 3
    `, { memorialId });
            session.close();
            return result.records.map((record) => record.get('memorialId'));
        });
    }
    getMemorialById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MemorialsService] getMemorialById(' + _id + ') called');
            return yield this.memorialModel.findById({ _id: new mongoose_2.Types.ObjectId(_id) });
        });
    }
    getMemorialFromFuneralId(funeralId) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MemorialsService] getMemorialFromFuneralId(' + funeralId + ') called');
            return yield this.memorialModel.findOne({ funeralId: funeralId });
        });
    }
    updateMemorial(_id, userId, memorialDto) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MemorialsService] updateMemorial(' +
                _id +
                ') called with userId: {' +
                userId +
                '}');
            common_1.Logger.log(memorialDto);
            const memorial = Object.assign({ userId }, memorialDto);
            return yield this.memorialModel.findOneAndUpdate({ _id: _id }, memorial, {
                new: true,
            });
        });
    }
    removeMemorialById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MemorialsService] removeMemorialById(' + _id + ') called');
            return yield this.memorialModel.findOneAndDelete({ _id: _id });
        });
    }
};
MemorialsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('NEO4J')),
    __param(1, (0, mongoose_1.InjectModel)('memorial')),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_driver_1.Driver !== "undefined" && neo4j_driver_1.Driver) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object])
], MemorialsService);
exports.MemorialsService = MemorialsService;


/***/ }),

/***/ "./apps/api/src/app/messages/message.dto.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageRequestDto = exports.MessageDto = void 0;
const class_validator_1 = __webpack_require__("class-validator");
class MessageDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", Object)
], MessageDto.prototype, "memorialId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], MessageDto.prototype, "dateTime", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], MessageDto.prototype, "qoute", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], MessageDto.prototype, "message", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsBase64)(),
    __metadata("design:type", Object)
], MessageDto.prototype, "imageBase64", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Object)
], MessageDto.prototype, "showName", void 0);
exports.MessageDto = MessageDto;
class MessageRequestDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], MessageRequestDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", Object)
], MessageRequestDto.prototype, "memorialId", void 0);
exports.MessageRequestDto = MessageRequestDto;


/***/ }),

/***/ "./apps/api/src/app/messages/message.model.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageSchema = exports.Message = void 0;
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
let Message = class Message {
};
__decorate([
    (0, mongoose_1.Prop)({ type: 'number' }),
    __metadata("design:type", Object)
], Message.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'user' }),
    __metadata("design:type", Object)
], Message.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'memorial' }),
    __metadata("design:type", Object)
], Message.prototype, "memorialId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'Date' }),
    __metadata("design:type", Object)
], Message.prototype, "dateTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string' }),
    __metadata("design:type", Object)
], Message.prototype, "qoute", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string' }),
    __metadata("design:type", Object)
], Message.prototype, "message", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string' }),
    __metadata("design:type", Object)
], Message.prototype, "imageBase64", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'boolean' }),
    __metadata("design:type", Object)
], Message.prototype, "showName", void 0);
Message = __decorate([
    (0, mongoose_1.Schema)()
], Message);
exports.Message = Message;
exports.MessageSchema = mongoose_1.SchemaFactory.createForClass(Message);


/***/ }),

/***/ "./apps/api/src/app/messages/message.module.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageModule = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const memorial_model_1 = __webpack_require__("./apps/api/src/app/memorials/memorial.model.ts");
const memorials_service_1 = __webpack_require__("./apps/api/src/app/memorials/memorials.service.ts");
const message_model_1 = __webpack_require__("./apps/api/src/app/messages/message.model.ts");
const messages_controller_1 = __webpack_require__("./apps/api/src/app/messages/messages.controller.ts");
const messages_service_1 = __webpack_require__("./apps/api/src/app/messages/messages.service.ts");
const neo4j_driver_1 = __webpack_require__("neo4j-driver");
let MessageModule = class MessageModule {
};
MessageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'message', schema: message_model_1.MessageSchema },
                { name: 'memorial', schema: memorial_model_1.MemorialSchema },
            ]),
        ],
        providers: [
            messages_service_1.MessagesService,
            memorials_service_1.MemorialsService,
            {
                provide: 'NEO4J',
                useFactory: () => {
                    const neo4jUri = process.env['NEO4J_URI'];
                    const neo4jUser = process.env['NEO4J_USERNAME'];
                    const neo4jPassword = process.env['NEO4J_PASSWORD'];
                    return neo4j_driver_1.default.driver(neo4jUri, neo4j_driver_1.default.auth.basic(neo4jUser, neo4jPassword));
                },
            },
        ],
        controllers: [messages_controller_1.MessagesController],
    })
], MessageModule);
exports.MessageModule = MessageModule;


/***/ }),

/***/ "./apps/api/src/app/messages/messages.controller.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagesController = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const express_1 = __webpack_require__("express");
const jwt_auth_guard_1 = __webpack_require__("./apps/api/src/app/auth/jwt-auth.guard.ts");
const memorials_service_1 = __webpack_require__("./apps/api/src/app/memorials/memorials.service.ts");
const auth_inforequest_interface_1 = __webpack_require__("./apps/api/src/app/shared/auth.inforequest.interface.ts");
const message_dto_1 = __webpack_require__("./apps/api/src/app/messages/message.dto.ts");
const messages_service_1 = __webpack_require__("./apps/api/src/app/messages/messages.service.ts");
let MessagesController = class MessagesController {
    constructor(messagesService, memorialsService) {
        this.messagesService = messagesService;
        this.memorialsService = memorialsService;
    }
    addMessageToMemorial(messageDto, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MessagesController][POST]/messages called');
            common_1.Logger.log(messageDto);
            const memorialId = messageDto.memorialId;
            const memorial = this.memorialsService.getMemorialById(memorialId);
            if (!memorial) {
                return res.status(404).json({
                    status: 404,
                    error: 'Memorial with id: {' + memorialId + '} not found',
                });
            }
            const requestId = req.user._id;
            const message = yield this.messagesService.addMessageToMemorial(messageDto, requestId);
            return res.status(201).json({
                status: 201,
                result: message,
            });
        });
    }
    getMessageFromMemorialId(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MessagesController][GET]/messages/memorial/' + id + ' called');
            const messages = yield this.messagesService.getAllMessagesFromMemorialId(id);
            return res.status(200).json({
                status: 200,
                result: messages,
            });
        });
    }
    getMessage(messageRequestDto, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id, memorialId } = messageRequestDto;
            common_1.Logger.log('[MessagesService][GET]/messages/' + _id + ' called');
            const message = yield this.messagesService.getMessageById(memorialId, _id);
            if (!message) {
                return res.status(404).json({
                    status: 404,
                    message: 'Message with id: {' + _id + '} not found',
                });
            }
            return res.status(200).json({
                status: 200,
                result: message,
            });
        });
    }
    updateMessage(id, messageDto, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const memorialId = messageDto.memorialId;
            common_1.Logger.log('[MessagesController][PUT]/messages/' + id + ' called');
            common_1.Logger.log(messageDto);
            const findMesssage = yield this.messagesService.getMessageById(memorialId, id);
            if (!findMesssage) {
                return res.status(404).json({
                    statut: 404,
                    error: 'Message with id: {' +
                        id +
                        '} not found at memorialId: {' +
                        memorialId +
                        '}',
                });
            }
            const requestId = req.user._id;
            if (requestId != findMesssage.userId) {
                return res.status(403).json({
                    status: 403,
                    error: "You don't have permission to update this message",
                });
            }
            const message = yield this.messagesService.updateMessage(memorialId, id, requestId, messageDto);
            return res.status(201).json({
                status: 201,
                result: message,
            });
        });
    }
    removeMessageById(messageRequestDto, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id, memorialId } = messageRequestDto;
            common_1.Logger.log('[MessagesService][DELETE]/messages/' + _id + ' called');
            const message = yield this.messagesService.getMessageById(memorialId, _id);
            if (!message) {
                return res.status(404).json({
                    status: 404,
                    error: 'Message with id: {' + _id + '} not found',
                });
            }
            const requestId = req.user._id;
            if (requestId != message.userId) {
                return res.status(403).json({
                    status: 403,
                    error: "You don't have permission to delete this message",
                });
            }
            yield this.messagesService.removeMessageById(memorialId, _id);
            return res.status(200).json({
                status: 200,
                message: 'Message with id: {' + _id + '} deleted',
            });
        });
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof message_dto_1.MessageDto !== "undefined" && message_dto_1.MessageDto) === "function" ? _c : Object, typeof (_d = typeof auth_inforequest_interface_1.IGetUserAuthInfoReqeust !== "undefined" && auth_inforequest_interface_1.IGetUserAuthInfoReqeust) === "function" ? _d : Object, typeof (_e = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "addMessageToMemorial", null);
__decorate([
    (0, common_1.Get)('/memorial/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_f = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "getMessageFromMemorialId", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof message_dto_1.MessageRequestDto !== "undefined" && message_dto_1.MessageRequestDto) === "function" ? _g : Object, typeof (_h = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "getMessage", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_j = typeof message_dto_1.MessageDto !== "undefined" && message_dto_1.MessageDto) === "function" ? _j : Object, typeof (_k = typeof auth_inforequest_interface_1.IGetUserAuthInfoReqeust !== "undefined" && auth_inforequest_interface_1.IGetUserAuthInfoReqeust) === "function" ? _k : Object, typeof (_l = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _l : Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "updateMessage", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof message_dto_1.MessageRequestDto !== "undefined" && message_dto_1.MessageRequestDto) === "function" ? _m : Object, typeof (_o = typeof auth_inforequest_interface_1.IGetUserAuthInfoReqeust !== "undefined" && auth_inforequest_interface_1.IGetUserAuthInfoReqeust) === "function" ? _o : Object, typeof (_p = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _p : Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "removeMessageById", null);
MessagesController = __decorate([
    (0, common_1.Controller)('messages'),
    __metadata("design:paramtypes", [typeof (_a = typeof messages_service_1.MessagesService !== "undefined" && messages_service_1.MessagesService) === "function" ? _a : Object, typeof (_b = typeof memorials_service_1.MemorialsService !== "undefined" && memorials_service_1.MemorialsService) === "function" ? _b : Object])
], MessagesController);
exports.MessagesController = MessagesController;


/***/ }),

/***/ "./apps/api/src/app/messages/messages.service.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagesService = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
const neo4j_driver_1 = __webpack_require__("neo4j-driver");
let MessagesService = class MessagesService {
    constructor(neo4jDriver, messageModel, memorialModel) {
        this.neo4jDriver = neo4jDriver;
        this.messageModel = messageModel;
        this.memorialModel = memorialModel;
    }
    addMessageToMemorial(messageDto, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MessagesService] addMessage called with userId: {' + userId + '}');
            const memorial = yield this.memorialModel.findById({
                _id: new mongoose_2.Types.ObjectId(messageDto.memorialId),
            });
            if (!memorial)
                throw new common_1.NotFoundException();
            const message = Object.assign({ _id: memorial.messages.length, userId }, messageDto);
            memorial.messages.push(message);
            yield memorial.save();
            // Create a relationship between the user node and the memorial node in Neo4j
            const session = this.neo4jDriver.session();
            yield session.run(`
      MERGE (u:User {userId: $userId})
      MERGE (m:Memorial {memorialId: $memorialId})
      MERGE (u)-[:REACTED_TO]->(m)
      `, {
                userId,
                memorialId: memorial.id,
            });
            session.close();
            common_1.Logger.log('[MessagesService] result of Neo4J:');
            return message;
        });
    }
    getAllMessagesFromMemorialId(memorialId) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MessagesService] getAllMessagesFromMemorialId(' +
                memorialId +
                ') called');
            const memorial = yield this.memorialModel.findById({
                _id: new mongoose_2.Types.ObjectId(memorialId),
            });
            if (!memorial)
                throw new common_1.NotFoundException();
            return memorial.messages;
        });
    }
    getMessageById(memorialId, _id) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MessagesService] getMessageById(' +
                _id +
                ') called with memorialId: {' +
                memorialId +
                '}');
            const memorial = yield this.memorialModel.findById({
                _id: new mongoose_2.Types.ObjectId(memorialId),
            });
            if (!memorial)
                throw new common_1.NotFoundException('Memorial with id: {' + memorialId + '} not found');
            if (memorial.messages[_id] != null &&
                memorial.messages[_id]._id == _id) {
                return memorial.messages[_id];
            }
            const findMessage = memorial.messages.find((message) => message._id == _id);
            if (!findMessage)
                throw new common_1.NotFoundException('Message with id: {' + _id + '} not found');
            return findMessage;
        });
    }
    updateMessage(memorialId, _id, userId, messageDto) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MessagesService] updateMessage(' +
                _id +
                ') called with userId: {' +
                userId +
                '}');
            common_1.Logger.log(messageDto);
            const message = Object.assign({ _id,
                userId }, messageDto);
            const memorial = yield this.memorialModel.findById({
                _id: new mongoose_2.Types.ObjectId(memorialId),
            });
            if (!memorial)
                throw new common_1.NotFoundException('Memorial with id: {' + memorialId + '} not found');
            const index = memorial.messages.findIndex((message) => message._id == _id);
            if (index == -1)
                throw new common_1.NotFoundException('Message with id: {' + _id + '} not found');
            memorial.messages[index] = message;
            yield memorial.save();
            return message;
        });
    }
    removeMessageById(memorialId, _id) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[MessagesService] removeMessageById(' + _id + ') called');
            const memorial = yield this.memorialModel.findById({
                _id: new mongoose_2.Types.ObjectId(memorialId),
            });
            if (!memorial)
                throw new common_1.NotFoundException('Memorial with id: {' + memorialId + '} not found');
            const index = memorial.messages.findIndex((message) => message._id == _id);
            if (index == -1)
                throw new common_1.NotFoundException('Message with id: {' + _id + '} not found');
            memorial.messages.splice(index, 1);
            yield memorial.save();
            return null;
        });
    }
};
MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('NEO4J')),
    __param(1, (0, mongoose_1.InjectModel)('message')),
    __param(2, (0, mongoose_1.InjectModel)('memorial')),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_driver_1.Driver !== "undefined" && neo4j_driver_1.Driver) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object])
], MessagesService);
exports.MessagesService = MessagesService;


/***/ }),

/***/ "./apps/api/src/app/persons/person.dto.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonDto = void 0;
const class_validator_1 = __webpack_require__("class-validator");
class PersonDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], PersonDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], PersonDto.prototype, "birthday", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], PersonDto.prototype, "deathday", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsIn)(['male', 'female']),
    __metadata("design:type", Object)
], PersonDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsBase64)(),
    __metadata("design:type", Object)
], PersonDto.prototype, "imageBase64", void 0);
exports.PersonDto = PersonDto;


/***/ }),

/***/ "./apps/api/src/app/persons/person.model.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonSchema = exports.Person = void 0;
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
let Person = class Person {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'user' }),
    __metadata("design:type", Object)
], Person.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string' }),
    __metadata("design:type", Object)
], Person.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'Date' }),
    __metadata("design:type", Object)
], Person.prototype, "birthday", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'Date' }),
    __metadata("design:type", Object)
], Person.prototype, "deathday", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string' }),
    __metadata("design:type", Object)
], Person.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string' }),
    __metadata("design:type", Object)
], Person.prototype, "imageBase64", void 0);
Person = __decorate([
    (0, mongoose_1.Schema)()
], Person);
exports.Person = Person;
exports.PersonSchema = mongoose_1.SchemaFactory.createForClass(Person);


/***/ }),

/***/ "./apps/api/src/app/persons/person.module.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonModule = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const person_model_1 = __webpack_require__("./apps/api/src/app/persons/person.model.ts");
const persons_controller_1 = __webpack_require__("./apps/api/src/app/persons/persons.controller.ts");
const persons_service_1 = __webpack_require__("./apps/api/src/app/persons/persons.service.ts");
let PersonModule = class PersonModule {
};
PersonModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'person', schema: person_model_1.PersonSchema }]),
        ],
        providers: [persons_service_1.PersonsService],
        controllers: [persons_controller_1.PersonsController],
    })
], PersonModule);
exports.PersonModule = PersonModule;


/***/ }),

/***/ "./apps/api/src/app/persons/persons.controller.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonsController = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const express_1 = __webpack_require__("express");
const jwt_auth_guard_1 = __webpack_require__("./apps/api/src/app/auth/jwt-auth.guard.ts");
const person_dto_1 = __webpack_require__("./apps/api/src/app/persons/person.dto.ts");
const persons_service_1 = __webpack_require__("./apps/api/src/app/persons/persons.service.ts");
const auth_inforequest_interface_1 = __webpack_require__("./apps/api/src/app/shared/auth.inforequest.interface.ts");
const id_validator_1 = __webpack_require__("./apps/api/src/app/shared/id.validator.ts");
let PersonsController = class PersonsController {
    constructor(personsService) {
        this.personsService = personsService;
    }
    addPerson(personDto, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestId = req.user._id;
            common_1.Logger.log('[PersonsController][POST]/persons called for userId: {' + requestId + '}');
            common_1.Logger.log(personDto);
            const person = yield this.personsService.addPerson(personDto, requestId);
            return res.status(201).json({
                status: 200,
                result: person,
            });
        });
    }
    getAllPersonsFromUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestId = req.user._id;
            common_1.Logger.log('[PersonsController][GET]/persons called for userId: {' + requestId + '}');
            const persons = yield this.personsService.getAllPersonsFromUser(requestId);
            return res.status(200).json({
                status: 200,
                result: persons,
            });
        });
    }
    getPersonById(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[PersonsController][GET]/persons/' + id + ' called');
            if (!id_validator_1.IdValidator.validate(id)) {
                return res.status(400).json({
                    status: 400,
                    error: 'Id must be a string of 12 bytes',
                });
            }
            const person = yield this.personsService.getPersonById(id);
            if (!person) {
                return res.status(404).json({
                    status: 404,
                    error: 'Person with id: {' + id + '} not found',
                });
            }
            return res.status(200).json({
                status: 200,
                result: person,
            });
        });
    }
    updatePerson(id, personDto, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[PersonsController][PUT]/persons/' + id + ' called');
            if (!id_validator_1.IdValidator.validate(id)) {
                return res.status(400).json({
                    status: 400,
                    error: 'Id is not in a valid string format',
                });
            }
            const findPerson = yield this.personsService.getPersonById(id);
            if (!findPerson) {
                return res.status(404).json({
                    status: 404,
                    error: 'Person with id: {' + id + '} not found',
                });
            }
            const requestId = req.user._id;
            if (requestId != findPerson.userId) {
                return res.status(403).json({
                    status: 403,
                    error: "You don't have permission to update this person",
                });
            }
            const person = yield this.personsService.updatePerson(id, requestId, personDto);
            return res.status(201).json({
                status: 201,
                result: person,
            });
        });
    }
    removePerson(id, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[PersonsController][DELETE]/persons/' + id + ' called');
            if (!id_validator_1.IdValidator.validate(id)) {
                return res.status(400).json({
                    status: 400,
                    error: 'Id is not in a valid string format',
                });
            }
            const findPerson = yield this.personsService.getPersonById(id);
            if (!findPerson) {
                return res.status(404).json({
                    status: 404,
                    error: 'Person with id: {' + id + '} not found',
                });
            }
            const requestId = req.user._id;
            if (requestId != findPerson.userId) {
                return res.status(403).json({
                    status: 403,
                    error: "You don't have permission to delete this person",
                });
            }
            yield this.personsService.removePersonById(id);
            return res.status(200).json({
                status: 200,
                message: 'Person with id: {' + id + '} deleted',
            });
        });
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof person_dto_1.PersonDto !== "undefined" && person_dto_1.PersonDto) === "function" ? _b : Object, typeof (_c = typeof auth_inforequest_interface_1.IGetUserAuthInfoReqeust !== "undefined" && auth_inforequest_interface_1.IGetUserAuthInfoReqeust) === "function" ? _c : Object, typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], PersonsController.prototype, "addPerson", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof auth_inforequest_interface_1.IGetUserAuthInfoReqeust !== "undefined" && auth_inforequest_interface_1.IGetUserAuthInfoReqeust) === "function" ? _e : Object, typeof (_f = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], PersonsController.prototype, "getAllPersonsFromUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_g = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], PersonsController.prototype, "getPersonById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_h = typeof person_dto_1.PersonDto !== "undefined" && person_dto_1.PersonDto) === "function" ? _h : Object, typeof (_j = typeof auth_inforequest_interface_1.IGetUserAuthInfoReqeust !== "undefined" && auth_inforequest_interface_1.IGetUserAuthInfoReqeust) === "function" ? _j : Object, typeof (_k = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], PersonsController.prototype, "updatePerson", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_l = typeof auth_inforequest_interface_1.IGetUserAuthInfoReqeust !== "undefined" && auth_inforequest_interface_1.IGetUserAuthInfoReqeust) === "function" ? _l : Object, typeof (_m = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _m : Object]),
    __metadata("design:returntype", Promise)
], PersonsController.prototype, "removePerson", null);
PersonsController = __decorate([
    (0, common_1.Controller)('persons'),
    __metadata("design:paramtypes", [typeof (_a = typeof persons_service_1.PersonsService !== "undefined" && persons_service_1.PersonsService) === "function" ? _a : Object])
], PersonsController);
exports.PersonsController = PersonsController;


/***/ }),

/***/ "./apps/api/src/app/persons/persons.service.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonsService = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
let PersonsService = class PersonsService {
    constructor(personModel) {
        this.personModel = personModel;
    }
    addPerson(personDto, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[PersonsService] addPerson called with userId: {' + userId + '}');
            common_1.Logger.log(personDto);
            const person = Object.assign({ userId }, personDto);
            return yield this.personModel.create(person);
        });
    }
    getAllPersonsFromUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[PersonsService] getAllPersonsFromUser(' + userId + ') called');
            return yield this.personModel.find({ userId: { $eq: userId } });
        });
    }
    getPersonById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[PersonsService] getPersonById(' + _id + ') called');
            return yield this.personModel.findById({ _id: new mongoose_2.Types.ObjectId(_id) });
        });
    }
    updatePerson(_id, userId, personDto) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[PersonsService] updatePerson(' +
                _id +
                ') called with userId: {' +
                userId +
                '}');
            common_1.Logger.log(personDto);
            const person = Object.assign({ _id,
                userId }, personDto);
            return yield this.personModel.findOneAndUpdate({ _id: _id }, person, {
                new: true,
            });
        });
    }
    removePersonById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[PersonsService] removePersonById(' + _id + ') called');
            return yield this.personModel.findOneAndDelete({ _id: _id });
        });
    }
};
PersonsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('person')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], PersonsService);
exports.PersonsService = PersonsService;


/***/ }),

/***/ "./apps/api/src/app/shared/auth.inforequest.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/api/src/app/shared/id.validator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IdValidator = void 0;
const mongoose_1 = __webpack_require__("mongoose");
class IdValidator {
    static validate(id) {
        return (0, mongoose_1.isValidObjectId)(id);
    }
}
exports.IdValidator = IdValidator;


/***/ }),

/***/ "./apps/api/src/app/user/user.dto.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserLoginDto = exports.UserDto = void 0;
const class_validator_1 = __webpack_require__("class-validator");
class UserDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], UserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", Object)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], UserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], UserDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], UserDto.prototype, "birthday", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsIn)(['male', 'female']),
    __metadata("design:type", Object)
], UserDto.prototype, "gender", void 0);
exports.UserDto = UserDto;
class UserLoginDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], UserLoginDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], UserLoginDto.prototype, "password", void 0);
exports.UserLoginDto = UserLoginDto;


/***/ }),

/***/ "./apps/api/src/app/user/user.model.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.User = void 0;
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
let User = class User {
};
__decorate([
    (0, mongoose_1.Prop)({ type: 'string' }),
    __metadata("design:type", Object)
], User.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', unique: true }),
    __metadata("design:type", Object)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string' }),
    __metadata("design:type", Object)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string' }),
    __metadata("design:type", Object)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'Date' }),
    __metadata("design:type", Object)
], User.prototype, "birthday", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string' }),
    __metadata("design:type", Object)
], User.prototype, "gender", void 0);
User = __decorate([
    (0, mongoose_1.Schema)()
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);


/***/ }),

/***/ "./apps/api/src/app/user/user.module.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const users_service_1 = __webpack_require__("./apps/api/src/app/user/users.service.ts");
const users_controller_1 = __webpack_require__("./apps/api/src/app/user/users.controller.ts");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const user_model_1 = __webpack_require__("./apps/api/src/app/user/user.model.ts");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'user', schema: user_model_1.UserSchema }])],
        providers: [users_service_1.UsersService],
        controllers: [users_controller_1.UsersController],
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./apps/api/src/app/user/users.controller.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const users_service_1 = __webpack_require__("./apps/api/src/app/user/users.service.ts");
const express_1 = __webpack_require__("express");
const user_dto_1 = __webpack_require__("./apps/api/src/app/user/user.dto.ts");
const bcrypt = __webpack_require__("bcrypt");
const jwt_auth_guard_1 = __webpack_require__("./apps/api/src/app/auth/jwt-auth.guard.ts");
const auth_inforequest_interface_1 = __webpack_require__("./apps/api/src/app/shared/auth.inforequest.interface.ts");
const id_validator_1 = __webpack_require__("./apps/api/src/app/shared/id.validator.ts");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    addUser(userDto, res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[UsersController][POST]/users called');
            common_1.Logger.log(userDto);
            const findUser = yield this.usersService.getUserByEmail(userDto.email);
            if (findUser) {
                return res.status(403).json({
                    status: 403,
                    error: 'The given email is already in use',
                });
            }
            userDto.password = yield this.hashPassword(userDto.password);
            const user = yield this.usersService.addUser(userDto);
            return res.status(201).json({
                status: 201,
                result: user,
            });
        });
    }
    getAllUsers(res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[UsersController][GET]/users called');
            const users = yield this.usersService.getAllUsers();
            return res.status(200).json({
                status: 200,
                result: users,
            });
        });
    }
    getUserById(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[UsersController][GET]/users/' + id + ' called');
            if (!id_validator_1.IdValidator.validate(id)) {
                return res.status(400).json({
                    status: 400,
                    error: 'Id is not in a valid string format',
                });
            }
            const user = yield this.usersService.getUserById(id);
            if (!user) {
                return res.status(404).json({
                    status: 404,
                    error: 'User with id {' + id + '} not found',
                });
            }
            return res.status(200).json({
                status: 200,
                result: user,
            });
        });
    }
    updateUser(id, userDto, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[UsersController][PUT]/users/' + id + ' called');
            common_1.Logger.log(userDto);
            if (!id_validator_1.IdValidator.validate(id)) {
                return res.status(400).json({
                    status: 400,
                    error: 'Id is not in a valid string format',
                });
            }
            const requestId = req.user._id;
            common_1.Logger.log(requestId);
            if (requestId != id) {
                return res.status(403).json({
                    status: 403,
                    error: "You don't have permission to update this user",
                });
            }
            if (req.user.email != userDto.email) {
                const findUser = yield this.usersService.getUserByEmail(userDto.email);
                if (findUser) {
                    return res.status(403).json({
                        status: 403,
                        error: 'The given email is already in use',
                    });
                }
            }
            userDto.password = yield this.hashPassword(userDto.password);
            const user = yield this.usersService.updateUser(id, userDto);
            return res.status(201).json({
                status: 201,
                result: user,
            });
        });
    }
    removeUser(id, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[UsersController][DELETE]/users/' + id + ' called');
            if (!id_validator_1.IdValidator.validate(id)) {
                return res.status(400).json({
                    status: 400,
                    error: 'Id is not in a valid string format',
                });
            }
            const requestId = req.user._id;
            if (requestId != id) {
                return res.status(403).json({
                    status: 403,
                    error: "You don't have permission to delete this user",
                });
            }
            const user = yield this.usersService.getUserById(id);
            if (!user) {
                return res.status(404).json({
                    status: 404,
                    error: 'User with id {' + id + '} not found',
                });
            }
            yield this.usersService.removeUserById(id);
            return res.status(200).json({
                status: 200,
                message: 'User with id {' + id + '} deleted',
            });
        });
    }
    hashPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[UsersController] hashPassword(' + password + ') called');
            const saltOrRounds = 10;
            return yield bcrypt.hash(password, saltOrRounds);
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof user_dto_1.UserDto !== "undefined" && user_dto_1.UserDto) === "function" ? _b : Object, typeof (_c = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addUser", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_e = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_f = typeof user_dto_1.UserDto !== "undefined" && user_dto_1.UserDto) === "function" ? _f : Object, typeof (_g = typeof auth_inforequest_interface_1.IGetUserAuthInfoReqeust !== "undefined" && auth_inforequest_interface_1.IGetUserAuthInfoReqeust) === "function" ? _g : Object, typeof (_h = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_j = typeof auth_inforequest_interface_1.IGetUserAuthInfoReqeust !== "undefined" && auth_inforequest_interface_1.IGetUserAuthInfoReqeust) === "function" ? _j : Object, typeof (_k = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "removeUser", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),

/***/ "./apps/api/src/app/user/users.service.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    addUser(userDto) {
        common_1.Logger.log('[UsersService] addUser called');
        common_1.Logger.log(userDto);
        return this.userModel.create(userDto);
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[UsersSerivce] getAllUsers called');
            return yield this.userModel.find();
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[UsersServices] getUserById(' + id + ') called');
            return yield this.userModel.findById({ _id: new mongoose_2.Types.ObjectId(id) });
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[UsersServices] getUserByEmail(' + email + ') called');
            return yield this.userModel.findOne({ email: email });
        });
    }
    updateUser(_id, userDto) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[UsersServices] updateUser(' + _id + ') called');
            common_1.Logger.log(userDto);
            const user = Object.assign({ _id }, userDto);
            return yield this.userModel.findOneAndUpdate({ _id: _id }, user, {
                new: true,
            });
        });
    }
    // Validation of user existing happens in Controller
    removeUserById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log('[UsersService] removeUserById(' + _id + '} called');
            return yield this.userModel.findOneAndDelete({ _id: _id });
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('user')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),

/***/ "./apps/api/src/main.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const session = __webpack_require__("express-session");
const app_module_1 = __webpack_require__("./apps/api/src/app/app.module.ts");
const bodyParser = __webpack_require__("body-parser");
const dotenv_1 = __webpack_require__("dotenv");
(0, dotenv_1.config)();
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(process.env);
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        app.enableCors();
        app.useGlobalPipes(new common_1.ValidationPipe());
        app.use(session({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: 3600000 },
        }));
        app.use(bodyParser.json({ limit: '10mb' }));
        app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
        const port = process.env['PORT'] || 3333;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mongoose":
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/passport":
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "bcrypt":
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "class-validator":
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "dotenv":
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-session":
/***/ ((module) => {

module.exports = require("express-session");

/***/ }),

/***/ "mongoose":
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "neo4j-driver":
/***/ ((module) => {

module.exports = require("neo4j-driver");

/***/ }),

/***/ "passport-jwt":
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./apps/api/src/main.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map