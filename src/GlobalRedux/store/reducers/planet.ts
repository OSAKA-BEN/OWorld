import {
  createReducer,
  createAsyncThunk,
  createAction,
} from '@reduxjs/toolkit';
import axiosInstance from '../../../utils/axios';
import { AlertType } from '../../../@types/alert';
import {
  Earth,
  IPlanet,
  Jupiter,
  Mars,
  Mercury,
  Neptune,
  Saturn,
  Uranus,
  Venus,
} from '../../../@types/planetDatas';

interface PlanetState {
  planetData: IPlanet;
  mercuryData: Mercury;
  venusData: Venus;
  earthData: Earth;
  marsData: Mars;
  jupiterData: Jupiter;
  saturnData: Saturn;
  uranusData: Uranus;
  neptuneData: Neptune;
  loading: boolean;
  infiniteLoading: boolean;
  alert: AlertType | null;
}

const initialState: PlanetState = {
  planetData: {} as IPlanet,
  mercuryData: {} as Mercury,
  venusData: {} as Venus,
  earthData: {} as Earth,
  marsData: {} as Mars,
  jupiterData: {} as Jupiter,
  saturnData: {} as Saturn,
  uranusData: {} as Uranus,
  neptuneData: {} as Neptune,
  loading: false,
  infiniteLoading: false,
  alert: null,
};

export const clearPlanetAlert = createAction('planet/clearAlert');

/**
 * Async thunk to fetch Mercury data.
 */

export const fetchPlanetData = createAsyncThunk(
  'fetching/fetchPlanetData', // nom de l'action
  async () => {
    const response = await axiosInstance.get('/oworld');
    return response.data;
  }
);

export const fetchMercuryData = createAsyncThunk(
  'mercury/fetchMercuryData',
  async () => {
    try {
      const response = await axiosInstance.get('/oworld');
      console.log('response :', response);
      return response.data.Mercury;
    } catch (error: string | any) {
      throw new Error(error.response.data.message as string);
    }
  }
);

/**
 * Async thunk to fetch Venus data.
 */
export const fetchVenusData = createAsyncThunk(
  'venus/fetchVenusData',
  async () => {
    try {
      const response = await axiosInstance.get('/oworld');
      return response.data.Venus;
    } catch (error: string | any) {
      throw new Error(error.response.data.message as string);
    }
  }
);

/**
 * Async thunk to fetch Earth data.
 */
export const fetchEarthData = createAsyncThunk(
  'earth/fetchEarthData',
  async () => {
    try {
      const response = await axiosInstance.get('/oworld');
      return response.data.Earth;
    } catch (error: string | any) {
      throw new Error(error.response.data.message as string);
    }
  }
);

/**
 * Async thunk to fetch Mars data.
 */
export const fetchMarsData = createAsyncThunk(
  'mars/fetchMarsData',
  async () => {
    try {
      const response = await axiosInstance.get('/oworld');
      return response.data.Mars;
    } catch (error: string | any) {
      throw new Error(error.response.data.message as string);
    }
  }
);

/**
 * Async thunk to fetch Jupiter data.
 */
export const fetchJupiterData = createAsyncThunk(
  'jupiter/fetchJupiterData',
  async () => {
    try {
      const response = await axiosInstance.get('/oworld');
      return response.data.Jupiter;
    } catch (error: string | any) {
      throw new Error(error.response.data.message as string);
    }
  }
);

/**
 * Async thunk to fetch Saturn data.
 */
export const fetchSaturnData = createAsyncThunk(
  'saturn/fetchSaturnData',
  async () => {
    try {
      const response = await axiosInstance.get('/oworld');
      return response.data.Saturn;
    } catch (error: string | any) {
      throw new Error(error.response.data.message as string);
    }
  }
);

/**
 * Async thunk to fetch Uranus data.
 */
export const fetchUranusData = createAsyncThunk(
  'uranus/fetchUranusData',
  async () => {
    try {
      const response = await axiosInstance.get('/oworld');
      return response.data.Uranus;
    } catch (error: string | any) {
      throw new Error(error.response.data.message as string);
    }
  }
);

/**
 * Async thunk to fetch Neptune data.
 */
export const fetchNeptuneData = createAsyncThunk(
  'neptune/fetchNeptuneData',
  async () => {
    try {
      const response = await axiosInstance.get('/oworld');
      return response.data.Neptune;
    } catch (error: string | any) {
      throw new Error(error.response.data.message as string);
    }
  }
);

// ... Create async thunks and actions for other planets

/**
 * Reducer for the planet state.
 */
const planetReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchPlanetData.pending, (state) => {
      state.loading = true;
      state.infiniteLoading = true;
      state.alert = null;
    })
    .addCase(fetchPlanetData.fulfilled, (state, action) => {
      state.loading = false;
      state.infiniteLoading = false;
      state.mercuryData = action.payload;
    })
    .addCase(fetchPlanetData.rejected, (state, action) => {
      state.loading = false;
      state.infiniteLoading = true;
      state.alert = {
        type: 'error',
        message: action.error.message || 'Unknown error occurred.',
      };
    })
    .addCase(fetchMercuryData.pending, (state) => {
      state.loading = true;
      state.infiniteLoading = true;
      state.alert = null;
    })
    .addCase(fetchMercuryData.fulfilled, (state, action) => {
      state.loading = false;
      state.infiniteLoading = false;
      state.mercuryData = action.payload;
    })
    .addCase(fetchMercuryData.rejected, (state, action) => {
      state.loading = false;
      state.infiniteLoading = true;
      state.alert = {
        type: 'error',
        message: action.error.message || 'Unknown error occurred.',
      };
    })

    .addCase(fetchVenusData.pending, (state) => {
      state.loading = true;
      state.infiniteLoading = true;
      state.alert = null;
    })
    .addCase(fetchVenusData.fulfilled, (state, action) => {
      state.loading = false;
      state.infiniteLoading = false;
      state.venusData = action.payload;
    })
    .addCase(fetchVenusData.rejected, (state, action) => {
      state.loading = false;
      state.infiniteLoading = true;
      state.alert = {
        type: 'error',
        message: action.error.message || 'Unknown error occurred.',
      };
    })

    .addCase(fetchEarthData.pending, (state) => {
      state.loading = true;
      state.infiniteLoading = true;
      state.alert = null;
    })
    .addCase(fetchEarthData.fulfilled, (state, action) => {
      state.loading = false;
      state.infiniteLoading = false;
      state.earthData = action.payload;
    })
    .addCase(fetchEarthData.rejected, (state, action) => {
      state.loading = false;
      state.infiniteLoading = true;
      state.alert = {
        type: 'error',
        message: action.error.message || 'Unknown error occurred.',
      };
    })

    .addCase(fetchMarsData.pending, (state) => {
      state.loading = true;
      state.infiniteLoading = true;
      state.alert = null;
    })
    .addCase(fetchMarsData.fulfilled, (state, action) => {
      state.loading = false;
      state.infiniteLoading = false;
      state.marsData = action.payload;
    })
    .addCase(fetchMarsData.rejected, (state, action) => {
      state.loading = false;
      state.infiniteLoading = true;
      state.alert = {
        type: 'error',
        message: action.error.message || 'Unknown error occurred.',
      };
    })

    .addCase(fetchJupiterData.pending, (state) => {
      state.loading = true;
      state.infiniteLoading = true;
      state.alert = null;
    })
    .addCase(fetchJupiterData.fulfilled, (state, action) => {
      state.loading = false;
      state.infiniteLoading = false;
      state.jupiterData = action.payload;
    })
    .addCase(fetchJupiterData.rejected, (state, action) => {
      state.loading = false;
      state.infiniteLoading = true;
      state.alert = {
        type: 'error',
        message: action.error.message || 'Unknown error occurred.',
      };
    })

    .addCase(fetchSaturnData.pending, (state) => {
      state.loading = true;
      state.infiniteLoading = true;
      state.alert = null;
    })
    .addCase(fetchSaturnData.fulfilled, (state, action) => {
      state.loading = false;
      state.infiniteLoading = false;
      state.saturnData = action.payload;
    })
    .addCase(fetchSaturnData.rejected, (state, action) => {
      state.loading = false;
      state.infiniteLoading = true;
      state.alert = {
        type: 'error',
        message: action.error.message || 'Unknown error occurred.',
      };
    })

    .addCase(fetchUranusData.pending, (state) => {
      state.loading = true;
      state.infiniteLoading = true;
      state.alert = null;
    })
    .addCase(fetchUranusData.fulfilled, (state, action) => {
      state.loading = false;
      state.infiniteLoading = false;
      state.uranusData = action.payload;
    })
    .addCase(fetchUranusData.rejected, (state, action) => {
      state.loading = false;
      state.infiniteLoading = true;
      state.alert = {
        type: 'error',
        message: action.error.message || 'Unknown error occurred.',
      };
    })

    .addCase(fetchNeptuneData.pending, (state) => {
      state.loading = true;
      state.infiniteLoading = true;
      state.alert = null;
    })
    .addCase(fetchNeptuneData.fulfilled, (state, action) => {
      state.loading = false;
      state.infiniteLoading = false;
      state.neptuneData = action.payload;
    })
    .addCase(fetchNeptuneData.rejected, (state, action) => {
      state.loading = false;
      state.infiniteLoading = true;
      state.alert = {
        type: 'error',
        message: action.error.message || 'Unknown error occurred.',
      };
    })

    .addCase(clearPlanetAlert, (state) => {
      state.alert = null;
    });
});

export default planetReducer;
