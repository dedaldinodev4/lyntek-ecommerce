import type { IProductDetail } from "@/types/productDetail";

type Details = Record<string, string>;

const productDetails: Details = {
  processor: 'Processador', 
  height: 'Altura', 
  width: 'Largura',
  graphic: 'Ecrã Resolução', 
  ssd: 'SSD', 
  ram: 'Memória',
  warranty: 'Garantia',
  storage: 'Armazenamento', 
  back_camera: 'Câmera Principal', 
  front_camera: 'Câmera Frontal',
  screen: 'Ecrã Tamanho', 
  bluetooth: 'Bluetooth', 
  wireless: 'Wi-Fi', 
  microphone: 'Microfone',
  noise_cancelling: 'Cancelamento de Ruído', 
  battery: 'Bateria',
  operating_system: 'Sistema Operativo'
}

const getProperty = <T, K extends keyof T>( obj: T, key: K) => {
  return obj[key]
}

export const getDetailProperty = (detail: string): string => {
  return getProperty(productDetails, `${detail}`)
}



