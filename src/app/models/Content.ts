export default class Content {
    
    private temperature: string = "0";
    private tempMax = "0";
    private tempMin = "0";
    private luminosity: string = "0";
    private lumMax: string = "0";
    private lumMin: string = "0";
    private humidity: string  = "0";
    private humidMax: string = "0";
    private humidMin: string = "0";
    private current_color: string = "0";
    private status_buzzer: Number = null;
    
	constructor(
        $temperature: string, 
        $tempMax: string,
        $tempMin: string, 
        $luminosity: string,
        $lumMax: string,
        $lumMin: string,
        $humidity: string,
        $humidMax: string,
        $humidMin: string,
        $current_color: string,
        $status_buzzer: Number) {
        this.temperature = $temperature;
        this.tempMax = $tempMax;
        this.tempMin = $tempMin;
        this.luminosity = $luminosity;
        this.lumMax = $lumMax;
        this.lumMin = $lumMin
        this.humidity = $humidity;
        this.humidMax = $humidMax;
        this.humidMin = $humidMin;
        this.current_color = $current_color;
        this.status_buzzer = $status_buzzer
    }

    /**
     * Getter $temperature
     * @return {string }
     */
	public get $temperature(): string  {
		return this.temperature;
	}

    /**
     * Setter $temperature
     * @param {string } value
     */
	public set $temperature(value: string ) {
		this.temperature = value;
    }

    /**
     * Getter $luminosity
     * @return {string }
     */
	public get $luminosity(): string  {
		return this.luminosity;
	}

    /**
     * Setter $luminosity
     * @param {string } value
     */
	public set $luminosity(value: string ) {
		this.luminosity = value;
	}
    

    /**
     * Getter $humidity
     * @return {string  }
     */
	public get $humidity(): string   {
		return this.humidity;
	}

    /**
     * Setter $humidity
     * @param {string  } value
     */
	public set $humidity(value: string  ) {
		this.humidity = value;
	}

    /**
     * Getter $lumMax
     * @return {string }
     */
	public get $lumMax(): string  {
		return this.lumMax;
	}

    /**
     * Setter $lumMax
     * @param {string } value
     */
	public set $lumMax(value: string ) {
		this.lumMax = value;
	}

    /**
     * Getter $lumMin
     * @return {string }
     */
	public get $lumMin(): string  {
		return this.lumMin;
	}

    /**
     * Setter $lumMin
     * @param {string } value
     */
	public set $lumMin(value: string ) {
		this.lumMin = value;
	}

    /**
     * Getter $humiMax
     * @return {string }
     */
	public get $humiMax(): string  {
		return this.humidMax;
	}

    /**
     * Setter $humiMax
     * @param {string } value
     */
	public set $humiMax(value: string ) {
		this.humidMax = value;
	}

    /**
     * Getter $humiMin
     * @return {string }
     */
	public get $humiMin(): string  {
		return this.humidMin;
	}

    /**
     * Setter $humiMin
     * @param {string } value
     */
	public set $humiMin(value: string ) {
		this.humidMin = value;
	}

    /**
     * Getter $current_color
     * @return {string }
     */
	public get $current_color(): string  {
		return this.current_color;
	}

    /**
     * Setter $current_color
     * @param {string } value
     */
	public set $current_color(value: string ) {
		this.current_color = value;
	}

    /**
     * Getter $status_buzzer
     * @return {Number }
     */
	public get $status_buzzer(): Number  {
		return this.status_buzzer;
	}

    /**
     * Setter $status_buzzer
     * @param {Number } value
     */
	public set $status_buzzer(value: Number ) {
		this.status_buzzer = value;
	}
    
}