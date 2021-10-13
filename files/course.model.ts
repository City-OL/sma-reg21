export interface Course {
  controls: Control[];
}

export type Control<P extends ControlProperties = ControlProperties> =
  GeoJSON.Feature<GeoJSON.Point, P>;

export interface ControlProperties {
  // QR code
  code: string;
  // B control code (Postenkennzahl)
  node?: number;
  // C which of any similar feature (Welches von mehreren gleichen)
  which?: string;
  // D Control feature (Postenmerkmal)
  feature?: string;
  // E appearance (Eigenschaften)
  appearance?: string;
  // F Dimensions / Combinations / Bend (Grössen / Kombination)
  dimensions?: string;
  // G Location of the control flag (Standort der Postenflagge)
  controlLocation?: string;
  // H Other information (Andere Angaben)
  otherInformation?: string;
}
