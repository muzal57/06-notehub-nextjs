import axios from "axios";
import { Note, NoteFormData } from "@/types/note";

const API_BASE_URL = "https://notehub-public.goit.study/api"; // ПЕРЕВІРТЕ ВАШ URL
const notehubToken = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

if (!notehubToken) {
  console.error("NEXT_PUBLIC_NOTEHUB_TOKEN is not defined");
}

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    ...(notehubToken && { Authorization: `Bearer ${notehubToken}` }),
  },
});

export const fetchNotes = async (query?: string): Promise<Note[]> => {
  const response = await axiosInstance.get("/notes", {
    params: query ? { search: query } : {},
  });
  return response.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await axiosInstance.get(`/notes/${id}`);
  return response.data;
};

export const addNote = async (noteData: NoteFormData): Promise<Note> => {
  const response = await axiosInstance.post("/notes", noteData);
  return response.data;
};

export const deleteNote = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/notes/${id}`);
};
