import { configureStore} from "@reduxjs/toolkit";
import { testApi } from "./apis/test";
const store = configureStore({
    reducer: {
        [testApi.reducerPath]: testApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ immutableCheck: false }).concat(testApi.middleware)
    }
});

export { testApi } from "./apis/test";
export { store };