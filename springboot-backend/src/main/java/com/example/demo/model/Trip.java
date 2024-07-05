package com.example.demo.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "trips")
public class Trip {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long tripsId;

	// Trip Information
	@Column(name = "trip_id")
	private long tripId;
	// single processor

	@Column(name = "tripTitle")
	private String tripTitle;

	@Column(name = "tripDescription")
	private String tripDescription;

	@Column(name = "start_date")
	private Date startDate;

	@Column(name = "event_location")
	private Date endDate;

	@Column(name = "trip_destination")
	private String tripDestination;

	@Column(name = "trip_budget")
	private double tripBudget;

	@Column(name = "trip_organizer")
	private String tripOrganizer;

	// Default Constructor
	public Trip() {

	}

	public Trip(long tripsId, long tripId, String tripTitle, String tripDescription, Date startDate, Date endDate,
			String tripDestination, double tripBudget, String tripOrganizer) {
		super();
		this.tripsId = tripsId;
		this.tripId = tripId;
		this.tripTitle = tripTitle;
		this.tripDescription = tripDescription;
		this.startDate = startDate;
		this.endDate = endDate;
		this.tripDestination = tripDestination;
		this.tripBudget = tripBudget;
		this.tripOrganizer = tripOrganizer;
	}

	public long getTripsId() {
		return tripsId;
	}

	public void setTripsId(long tripsId) {
		this.tripsId = tripsId;
	}

	public long getTripId() {
		return tripId;
	}

	public void setTripId(long tripId) {
		this.tripId = tripId;
	}

	public String getTripTitle() {
		return tripTitle;
	}

	public void setTripTitle(String tripTitle) {
		this.tripTitle = tripTitle;
	}

	public String getTripDescription() {
		return tripDescription;
	}

	public void setTripDescription(String tripDescription) {
		this.tripDescription = tripDescription;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getTripDestination() {
		return tripDestination;
	}

	public void setTripDestination(String tripDestination) {
		this.tripDestination = tripDestination;
	}

	public double getTripBudget() {
		return tripBudget;
	}

	public void setTripBudget(double tripBudget) {
		this.tripBudget = tripBudget;
	}

	public String getTripOrganizer() {
		return tripOrganizer;
	}

	public void setTripOrganizer(String tripOrganizer) {
		this.tripOrganizer = tripOrganizer;
	}

}

//
//@Id
//@GeneratedValue(strategy = GenerationType.IDENTITY)
//private long tripsId;
//
//// Trip Information
//@Column(name = "trip_id")
//private long tripId;
//// single processor
//
//@Column(name = "tripTitle")
//private String tripTitle;
//
//@Column(name = "tripDescription")
//private String tripDescription;
//
//@Column(name = "start_date")
//private Date startDate;
//
//@Column(name = "event_location")
//private Date endDate;
//
//@Column(name = "trip_destination")
//private String tripDestination;
//
//@Column(name = "trip_budget")
//private double tripBudget;
//
//@Column(name = "trip_organizer")
//private String tripOrganizer;
