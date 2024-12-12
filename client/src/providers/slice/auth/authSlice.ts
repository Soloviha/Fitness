/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AuthSliceType } from '../../../schemas/auth.schema';
import { loginThunk, logoutThunk, refreshThunk, signupThunk } from './authThunks';

const initialState: AuthSliceType = {
  user: null,
  accessToken: null,
  error: null,
  isModalOpen: false,
  isSignupModalOpen: false,
  isLoading: false, // Добавлено состояние загрузки
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setModalOpen: (state) => {
      state.isModalOpen = true;
      state.isSignupModalOpen = false;
    },
    setSignupModalOpen: (state) => {
      state.isSignupModalOpen = true;
      state.isModalOpen = false;
    },
    setModalClose: (state) => {
      state.isModalOpen = false;
      state.isSignupModalOpen = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(refreshThunk.pending, (state) => {
      state.isLoading = true; 
    });
    builder.addCase(refreshThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLoading = false; 
    });
    builder.addCase(refreshThunk.rejected, (state) => {
      state.accessToken = null;
      state.user = null;
      state.isLoading = false; 
    });
    
    builder.addCase(loginThunk.pending, (state) => {
      state.isLoading = true; 
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLoading = false; 
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.error = action.error.message ?? 'Очень странная ошибка';
      state.isLoading = false; 
    });
    
    builder.addCase(signupThunk.pending, (state) => {
      state.isLoading = true; 
    });
    builder.addCase(signupThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLoading = false; 
    });
    builder.addCase(signupThunk.rejected, (state, action) => {
      state.error = action.error.message ?? 'Очень странная ошибка';
      state.isLoading = false; 
    });
    
    builder.addCase(logoutThunk.fulfilled, (state) => {
      state.user = null;
      state.accessToken = null;
    });
    builder.addCase(logoutThunk.rejected, (state, action) => {
      state.error = action.error.message ?? 'Очень странная ошибка';
    });
  },
});

export const { setAccessToken, setModalClose, setModalOpen, setSignupModalOpen } =
  authSlice.actions;

export default authSlice.reducer;

// /* eslint-disable no-param-reassign */

// import type { PayloadAction } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
// import type { AuthSliceType } from '../../../schemas/auth.schema';
// import { loginThunk, logoutThunk, refreshThunk, signupThunk } from './authThunks';

// const initialState: AuthSliceType = {
//   user: null,
//   accessToken: null,
//   error: null,
//   isModalOpen: false,
//   isSignupModalOpen: false,
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setAccessToken: (state, action: PayloadAction<string>) => {
//       state.accessToken = action.payload;
//     },
//     setModalOpen: (state) => {
//       state.isModalOpen = true;
//       state.isSignupModalOpen = false;
//     },
//     setSignupModalOpen: (state) => {
//       state.isSignupModalOpen = true;
//       state.isModalOpen = false;
//     },
//     setModalClose: (state) => {
//       state.isModalOpen = false;
//       state.isSignupModalOpen = false;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(refreshThunk.fulfilled, (state, action) => {
//       state.user = action.payload.user;
//       state.accessToken = action.payload.accessToken;
//     });
//     builder.addCase(refreshThunk.rejected, (state) => {
//       state.accessToken = null;
//       state.user = null;
//     });
//     builder.addCase(loginThunk.fulfilled, (state, action) => {
//       state.user = action.payload.user;
//       state.accessToken = action.payload.accessToken;
//     });
//     builder.addCase(loginThunk.rejected, (state, action) => {
//       state.error = action.error.message ?? 'Очень странная ошибка';
//     });
//     builder.addCase(signupThunk.fulfilled, (state, action) => {
//       state.user = action.payload.user;
//       state.accessToken = action.payload.accessToken;
//     });
//     builder.addCase(signupThunk.rejected, (state, action) => {
//       state.error = action.error.message ?? 'Очень странная ошибка';
//     });
//     builder.addCase(logoutThunk.fulfilled, (state) => {
//       state.user = null;
//       state.accessToken = null;
//     });
//     builder.addCase(logoutThunk.rejected, (state, action) => {
//       state.error = action.error.message ?? 'Очень странная ошибка';
//     });
//   },
// });

// export const { setAccessToken, setModalClose, setModalOpen, setSignupModalOpen } =
//   authSlice.actions;

// export default authSlice.reducer;
