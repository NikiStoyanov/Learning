﻿namespace P03_FootballBetting.Data
{
    using Microsoft.EntityFrameworkCore;
    using P03_FootballBetting.Data.Models;
    using System;
    using System.Collections.Generic;
    using System.Text;

    public class FootballBettingContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DbSet<Bet> Bets { get; set; }

        public DbSet<Game> Games { get; set; }

        public DbSet<Country> Countries { get; set; }

        public DbSet<Town> Towns { get; set; }

        public DbSet<Color> Colors { get; set; }

        public DbSet<Position> Positions { get; set; }

        public DbSet<Player> Players { get; set; }

        public DbSet<Team> Teams { get; set; }

        public DbSet<PlayerStatistic> PlayerStatistics { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder
                    .UseSqlServer("Server = .\\sqlexpress; Database = FootballBookmakerSystem; Integrated Security = True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Team>()
                .HasOne(t => t.PrimaryKitColor)
                .WithMany(p => p.PrimaryKitTeams)
                .HasForeignKey(t => t.PrimaryKitColorId);

            modelBuilder
                .Entity<Team>()
                .HasOne(t => t.SecondaryKitColor)
                .WithMany(p => p.SecondaryKitTeams)
                .HasForeignKey(t => t.SecondaryKitColorId);

            modelBuilder
                .Entity<Team>()
                .HasOne(t => t.Town)
                .WithMany(t => t.Teams)
                .HasForeignKey(t => t.TownId);

            modelBuilder
                .Entity<Game>()
                .HasOne(g => g.AwayTeam)
                .WithMany(at => at.AwayGames)
                .HasForeignKey(g => g.AwayTeamId);

            modelBuilder
                .Entity<Game>()
                .HasOne(g => g.HomeTeam)
                .WithMany(ht => ht.HomeGames)
                .HasForeignKey(g => g.HomeTeamId);

            modelBuilder
                .Entity<Town>()
                .HasOne(t => t.Country)
                .WithMany(c => c.Towns)
                .HasForeignKey(t => t.CountryId);

            modelBuilder
                .Entity<Player>()
                .HasOne(p => p.Team)
                .WithMany(t => t.Players)
                .HasForeignKey(p => p.TeamId);

            modelBuilder
                .Entity<Player>()
                .HasOne(p => p.Position)
                .WithMany(p => p.Players)
                .HasForeignKey(p => p.PositionId);

            modelBuilder
                .Entity<Bet>()
                .HasOne(b => b.Game)
                .WithMany(g => g.Bets)
                .HasForeignKey(b => b.BetId);

            modelBuilder
                .Entity<Bet>()
                .HasOne(b => b.User)
                .WithMany(u => u.Bets)
                .HasForeignKey(b => b.UserId);

            modelBuilder
                .Entity<PlayerStatistic>()
                .HasKey(ps => new { ps.GameId, ps.PlayerId });

            modelBuilder
                .Entity<PlayerStatistic>()
                .HasOne(ps => ps.Game)
                .WithMany(g => g.PlayerStatistics)
                .HasForeignKey(ps => ps.GameId);

            modelBuilder
                .Entity<PlayerStatistic>()
                .HasOne(ps => ps.Player)
                .WithMany(p => p.PlayerStatistics)
                .HasForeignKey(ps => ps.PlayerId);
        }
    }
}
