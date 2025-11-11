//useRef: store mutable references; useCallback: memorize function; useEffect: used to clean when component unmount
import { useCallback, useEffect, useRef } from 'react';
//generateDescription: call OpenAI GPT to generate text; textToSpeech: Call OpenAI TTS to convert text to audio
import { generateDescription, textToSpeech } from '../api';

export default function useLLMAudio() {
    //store audio element
    const audioRef = useRef(null);
    //store the Blob URL coming from API
    const urlRef = useRef(null);
    //store AbortController
    const controllerRef = useRef(null);
    //request ID counter for race condition prevention
    const reqIdRef = useRef(0);

    //abort the ongoing api request
    const abort = () => {
        controllerRef.current?.abort();
        controllerRef.current = null;
    };

    //clean up all the resources
    const cleanup = useCallback(() => {
        abort();
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.src = '';
            audioRef.current = null;
        }
        if (urlRef.current) {
            URL.revokeObjectURL(urlRef.current);
            urlRef.current = null;
        }
    }, []);

    //Stop the audio
    const stop = useCallback(() => {
        //Invalidate any on-going tasks and stop audio
        reqIdRef.current += 1;
        cleanup();
    }, [cleanup]);

    //Audio speak
    const speak = useCallback(async ({ name, category }) => {
        const myId = ++reqIdRef.current;
        //Clear any currently playing audio
        cleanup();

        const controller = new AbortController();
        controllerRef.current = controller;

        try {
            //get the text from api
            const text = await generateDescription({ name, category, signal: controller.signal });
            if (controller.signal.aborted || myId !== reqIdRef.current) return;

            //transcribe text to audio
            const audioBlob = await textToSpeech(text, controller.signal);
            if (controller.signal.aborted || myId !== reqIdRef.current) return;

            //store Blob url
            const url = URL.createObjectURL(audioBlob);
            urlRef.current = url;

            const audio = new Audio(url);
            audioRef.current = audio;

            //set up cleanup when audio finished by checking if the audio is still the current one
            audio.onended = () => {
                if (myId === reqIdRef.current) cleanup();
            };

            await audio.play();
        } catch (err) {
            if (!controller.signal.aborted) {
                console.error('[useLLMAudio] error:', err);
                cleanup();
            }
        }
    }, [cleanup]);

    //Auto-cleanup if the component using this hook unmounts
    useEffect(() => () => stop(), [stop]);

    return { speak, stop };
}