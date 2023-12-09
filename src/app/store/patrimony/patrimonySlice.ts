import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { getPatrimonys, getPatrimony, postPatrimony, updatePatrimony, deletePatrimony} from "../../services/patrimonyService";

type PatrimonyState = {
  patrimonys: any[]
  patrimonyId: number | null
  patrimony: any | null
}

export const fetchPatrimonys = createAsyncThunk(
  "patrimony/getPatrimonys",
  async () => {
    var result = await getPatrimonys()
    if (result === null) {
      return "error"
    }
    setPatrimonys(result)
    return result
  },
)

export const fetchPatrimony = createAsyncThunk(
  "patrimony/getPatrimonyById",
  async (id: string | undefined) => {
    var result = await getPatrimony(id)

    if (result == null) {
      return "error"
    }

    setPatrimony(result)
    return result
  },
)

export const createPatrimony = createAsyncThunk(
    'patrimony/createPatrimony',
    async (patrimony: any) => {
        var result = await postPatrimony(patrimony)

    if (result == null) {
      return { error: result }
    }

    setPatrimony(result)
    return result
  },
)

export const updatePatrimonys = createAsyncThunk(
  "patrimony/updatePatrimony",
  async ({ id, patrimony }: { id: string | undefined, patrimony: any }) => {
    var result = await updatePatrimony(id,patrimony)

        if(result == null) {
            return {'error': result}
        }

        setPatrimony(result);
        return result;
    }
)

export const deletePatrimonys = createAsyncThunk(
  "patrimony/deletePatrimony",
  async (id: string | undefined) => {
    var result = await deletePatrimony(id)

    if (result == null) {
      return { error: result }
    }

    setPatrimony(result)
    return result
  },
)

const slice = createSlice({
  name: "patrimony",
  initialState: {
    patrimonys: [],
    patrimonyId: null,
    patrimony: null,
  } as PatrimonyState,
  reducers: {
    setPatrimonys: (state, { payload: { patrimonys } }) => {
      state.patrimonys = patrimonys
    },
    setPatrimonyId: (state, { payload: { patrimonyId } }) => {
      state.patrimonyId = patrimonyId
    },
    setPatrimony: (state, { payload: { patrimony } }) => {
      state.patrimony = patrimony
    },
  },
  extraReducers: (builder) => {},
})

export const { setPatrimonys, setPatrimonyId, setPatrimony } = slice.actions

export const selectAssociates  = (state: RootState) => state.patrimony.patrimonys
export const selectAssociateId = (state: RootState) => state.patrimony.patrimonyId
export const selectAssociate   = (state: RootState) => state.patrimony.patrimony

export default slice.reducer
