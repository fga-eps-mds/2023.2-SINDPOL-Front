import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { getAssociate, getAssociates, disableAssociate, enableAssociate, updateAssociate, postAssociate} from "../../services/associatesService";

type AssociateState = {
  associates: any[]
  associateId: number | null
  associate: any | null
}

export const fetchAssociates = createAsyncThunk(
  "associate/getAssociates",
  async () => {
    var result = await getAssociates()
    if (result === null) {
      return "error"
    }
    setAssociates(result)
    return result
  },
)

export const fetchAssociate = createAsyncThunk(
  "associate/getAssociateById",
  async (id: string | undefined) => {
    var result = await getAssociate(id)

    if (result == null) {
      return "error"
    }

    setAssociate(result)
    return result
  },
)

export const createAssociate = createAsyncThunk(
    'associate/createAssociate',
    async (associate: any) => {
        var result = await getAssociate(associate)

    if (result == null) {
      return { error: result }
    }

    setAssociate(result)
    return result
  },
)

export const updateAssociates = createAsyncThunk(
  "associate/updateAssociate",
  async ({ id, associate }: { id: string | undefined, associate: any }) => {
    var result = await updateAssociate(id,associate)

        if(result == null) {
            return {'error': result}
        }

        setAssociate(result);
        return result;
    }
)

export const deleteAssociate = createAsyncThunk(
  "associate/deleteAssociate",
  async (id: string | undefined) => {
    var result = await getAssociate(id)

    if (result == null) {
      return { error: result }
    }

    setAssociate(result)
    return result
  },
)

export const disableAssociateID = createAsyncThunk(
  "associate/disableAssociate",
  async (id: string) => {
    var result = await disableAssociate(id)
        if(result == null) {
            return {'error': result}
        }
    if (result == null) {
      return { error: result }
    }

    setAssociate(result)
    return result
  },
)

export const enableAssociateID = createAsyncThunk(
  "associate/enableAssociate",
  async (id: string) => {
    var result = await enableAssociate(id)

    if (result == null) {
      return { error: result }
    }

    setAssociate(result)
    return result
  },
)
const slice = createSlice({
  name: "associate",
  initialState: {
    associates: [],
    associateId: null,
    associate: null,
  } as AssociateState,
  reducers: {
    setAssociates: (state, { payload: { associates } }) => {
      state.associates = associates
    },
    setAssociateId: (state, { payload: { associateId } }) => {
      state.associateId = associateId
    },
    setAssociate: (state, { payload: { associate } }) => {
      state.associate = associate
    },
  },
  extraReducers: (builder) => {},
})

export const { setAssociates, setAssociateId, setAssociate } = slice.actions

export const selectAssociates  = (state: RootState) => state.associate.associates
export const selectAssociateId = (state: RootState) => state.associate.associateId
export const selectAssociate   = (state: RootState) => state.associate.associate

export default slice.reducer
