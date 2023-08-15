"use strict";
// src/items/items.service.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.find = exports.findAll = void 0;
/**
 * Data Model Interfaces
 */
/**
 * In-Memory Store
 */
let movieItems = {
    1: {
        id: 1,
        name: "Burger",
        image_url: ["https://cdn.auth0.com/blog/whatabyte/burger-sm.png"],
    },
    2: {
        id: 2,
        name: "Pizza",
        image_url: ["https://cdn.auth0.com/blog/whatabyte/burger-sm.png"],
    },
    3: {
        id: 3,
        name: "Tea",
        image_url: ["https://cdn.auth0.com/blog/whatabyte/burger-sm.png"],
    },
};
/**
 * Service Methods
 */
const findAll = () => __awaiter(void 0, void 0, void 0, function* () { return Object.values(movieItems); });
exports.findAll = findAll;
const find = (id) => __awaiter(void 0, void 0, void 0, function* () { return movieItems[id]; });
exports.find = find;
const create = (newItem) => __awaiter(void 0, void 0, void 0, function* () {
    const id = new Date().valueOf();
    movieItems[id] = Object.assign({ id }, newItem);
    return movieItems[id];
});
exports.create = create;
const update = (id, itemUpdate) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield (0, exports.find)(id);
    if (!item) {
        return null;
    }
    movieItems[id] = Object.assign({ id }, itemUpdate);
    return movieItems[id];
});
exports.update = update;
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield (0, exports.find)(id);
    if (!item) {
        return null;
    }
    delete movieItems[id];
});
exports.remove = remove;
//# sourceMappingURL=movies.service.js.map