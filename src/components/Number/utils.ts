import { COLOR } from "./types";

export const getSectionBackgroundColor = (
    number: number,
    segmentA: HTMLDivElement,
    segmentB: HTMLDivElement,
    segmentC: HTMLDivElement,
    segmentD: HTMLDivElement,
    segmentE: HTMLDivElement,
    segmentF: HTMLDivElement,
    segmentG: HTMLDivElement,
    ): void => {
      if(number === 1) {
      segmentA.style.background = COLOR.GRAY;
      segmentB.style.background = COLOR.ACTIVE;
      segmentC.style.background = COLOR.ACTIVE;
      segmentD.style.background = COLOR.GRAY;
      segmentE.style.background = COLOR.GRAY;
      segmentF.style.background = COLOR.GRAY;
      segmentG.style.background = COLOR.GRAY;
      return;
    } else if(number === 2) {
      segmentA.style.background = COLOR.ACTIVE;
      segmentB.style.background = COLOR.ACTIVE;
      segmentC.style.background = COLOR.GRAY;
      segmentD.style.background = COLOR.ACTIVE;
      segmentE.style.background = COLOR.ACTIVE;
      segmentF.style.background = COLOR.GRAY;
      segmentG.style.background = COLOR.ACTIVE;
      return;
    } else if(number === 3) {
      segmentA.style.background = COLOR.ACTIVE;
      segmentB.style.background = COLOR.ACTIVE;
      segmentC.style.background = COLOR.ACTIVE;
      segmentD.style.background = COLOR.ACTIVE;
      segmentE.style.background = COLOR.GRAY;
      segmentF.style.background = COLOR.GRAY;
      segmentG.style.background = COLOR.ACTIVE;
      return;
    } else if(number === 4) {
      segmentA.style.background = COLOR.GRAY;
      segmentB.style.background = COLOR.ACTIVE;
      segmentC.style.background = COLOR.ACTIVE;
      segmentD.style.background = COLOR.GRAY;
      segmentE.style.background = COLOR.GRAY;
      segmentF.style.background = COLOR.ACTIVE;
      segmentG.style.background = COLOR.ACTIVE;
      return;
    } else if(number === 5) {
      segmentA.style.background = COLOR.ACTIVE;
      segmentB.style.background = COLOR.GRAY;
      segmentC.style.background = COLOR.ACTIVE;
      segmentD.style.background = COLOR.ACTIVE;
      segmentE.style.background = COLOR.GRAY;
      segmentF.style.background = COLOR.ACTIVE;
      segmentG.style.background = COLOR.ACTIVE;
      return;
    } else if(number === 6) {
      segmentA.style.background = COLOR.ACTIVE;
      segmentB.style.background = COLOR.GRAY;
      segmentC.style.background = COLOR.ACTIVE;
      segmentD.style.background = COLOR.ACTIVE;
      segmentE.style.background = COLOR.ACTIVE;
      segmentF.style.background = COLOR.ACTIVE;
      segmentG.style.background = COLOR.ACTIVE;
      return;
    } else if(number === 7) {
      segmentA.style.background = COLOR.ACTIVE;
      segmentB.style.background = COLOR.ACTIVE;
      segmentC.style.background = COLOR.ACTIVE;
      segmentD.style.background = COLOR.GRAY;
      segmentE.style.background = COLOR.GRAY;
      segmentF.style.background = COLOR.GRAY;
      segmentG.style.background = COLOR.GRAY;
      return;
    } else if(number === 8) {
      segmentA.style.background = COLOR.ACTIVE;
      segmentB.style.background = COLOR.ACTIVE;
      segmentC.style.background = COLOR.ACTIVE;
      segmentD.style.background = COLOR.ACTIVE;
      segmentE.style.background = COLOR.ACTIVE;
      segmentF.style.background = COLOR.ACTIVE;
      segmentG.style.background = COLOR.ACTIVE;
      return;
    } else if(number === 9) {
      segmentA.style.background = COLOR.ACTIVE;
      segmentB.style.background = COLOR.ACTIVE;
      segmentC.style.background = COLOR.ACTIVE;
      segmentD.style.background = COLOR.ACTIVE;
      segmentE.style.background = COLOR.GRAY;
      segmentF.style.background = COLOR.ACTIVE;
      segmentG.style.background = COLOR.ACTIVE;
      return;
    } else if(number === 0) {
      segmentA.style.background = COLOR.ACTIVE;
      segmentB.style.background = COLOR.ACTIVE;
      segmentC.style.background = COLOR.ACTIVE;
      segmentD.style.background = COLOR.ACTIVE;
      segmentE.style.background = COLOR.ACTIVE;
      segmentF.style.background = COLOR.ACTIVE;
      segmentG.style.background = COLOR.GRAY;
      return;
    }
  }